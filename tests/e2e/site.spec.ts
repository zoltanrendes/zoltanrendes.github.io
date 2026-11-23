import { expect, test, type Locator } from '@playwright/test';

const photoOrder = ['001', '002', '003', '005', '006', '004', '007', '008'];
const cards = '.flora-gallery-card';

async function expectDecoded(images: Locator, count: number) {
  await expect(images).toHaveCount(count);
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.naturalWidth)).toBeGreaterThan(0);
  }
}

for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  test.describe(`at ${viewport.width}px`, () => {
    test.use({ viewport, reducedMotion: viewport.width === 390 ? 'reduce' : 'no-preference' });

    test('portfolio links to Flora and loads the real federated gallery', async ({ page, baseURL }, testInfo) => {
      const pages = testInfo.project.name === 'pages-chromium';
      const floraUrl = pages ? `${baseURL}/flora-studies/` : 'http://localhost:5174/';
      const remoteEntry = `${floraUrl}remoteEntry.js`;
      const errors: string[] = [];
      const requests: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('request', request => requests.push(request.url()));
      const entry = page.waitForResponse(response => response.url() === remoteEntry);
      const galleryCss = page.waitForResponse(response => response.url().startsWith(floraUrl) && /Gallery-.*\.css$/.test(response.url()));
      await page.goto('/');
      await expect(page).toHaveTitle(/Zoltan Rendes/);
      await expect(page.getByRole('navigation').getByRole('link', { name: 'Photography' })).toHaveAttribute('href', '#photography');
      await page.getByRole('navigation').getByRole('link', { name: 'Photography' }).click();
      await expect(page).toHaveURL(/#photography$/);
      expect((await entry).ok()).toBe(true);
      const css = await galleryCss;
      expect(css.ok()).toBe(true);
      await expect(page.locator(cards).locator('img')).toHaveCount(8);
      expect(await page.locator(cards).locator('img').evaluateAll(images => images.map(image => image.getAttribute('alt')))).toEqual(photoOrder.map(id => `Flora Study ${id}`));
      await expectDecoded(page.locator(`${cards} img`), 8);
      await expectDecoded(page.locator('.profile-photo, .photography-image img'), 2);
      const cv = await page.request.get('/CV%20Zoltan%20Rendes%202026.pdf');
      expect(cv.ok()).toBe(true);
      expect(cv.headers()['content-type']).toContain('application/pdf');
      const styles = () => page.locator('body, .topbar, .hero, .photography-feature, .footer').evaluateAll(elements =>
        elements.map(element => {
          const style = getComputedStyle(element);
          return [style.color, style.backgroundImage, style.fontFamily, style.padding, style.position];
        }));
      const withGallery = await styles();
      await page.evaluate(url => {
        const sheet = Array.from(document.styleSheets).find(sheet => sheet.href === url);
        if (!sheet) throw new Error('Remote gallery stylesheet not mounted');
        sheet.disabled = true;
      }, css.url());
      expect(await styles()).toEqual(withGallery);
      await page.evaluate(url => {
        const sheet = Array.from(document.styleSheets).find(sheet => sheet.href === url);
        if (!sheet) throw new Error('Remote gallery stylesheet not mounted');
        sheet.disabled = false;
      }, css.url());
      const first = page.locator(cards).first();
      await first.click();
      await expect(page.getByRole('dialog').getByRole('img')).toHaveAttribute('alt', 'Flora Study 001');
      await page.keyboard.press('Escape');
      await expect(first).toBeFocused();
      await page.reload();
      await expect(page.locator('#photography').getByRole('heading', { name: /quiet visual essay/ })).toBeInViewport();
      await expect(page.locator('#photography')).toHaveClass(/is-visible/);
      expect(errors).toEqual([]);
      if (pages) expect(requests.filter(url => /localhost:517[34]/.test(url))).toEqual([]);
      await page.getByRole('link', { name: 'Open Flora Studies', exact: true }).click();
      await expect(page).toHaveURL(floraUrl);
    });

    test('standalone Flora preserves deep links, photos and lightbox', async ({ page, baseURL }, testInfo) => {
      const pages = testInfo.project.name === 'pages-chromium';
      const floraUrl = pages ? `${baseURL}/flora-studies/` : 'http://localhost:5174/';
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(floraUrl);
      await page.getByRole('link', { name: 'Gallery', exact: true }).click();
      await expect(page).toHaveURL(/#gallery$/);
      await expect(page.locator('#gallery .flora-section-heading')).toBeInViewport();
      await expect(page).toHaveTitle(/Flora Studies/);
      await expectDecoded(page.locator('.hero-photo img'), 3);
      await expectDecoded(page.locator(`${cards} img`), 8);
      const first = page.locator(cards).first();
      await first.focus();
      await page.keyboard.press('Enter');
      await expect(page.getByRole('dialog').getByRole('button', { name: 'Close' })).toBeFocused();
      await expectDecoded(page.getByRole('dialog').getByRole('img'), 1);
      await page.getByRole('dialog').getByRole('button', { name: 'Close' }).click();
      await expect(first).toBeFocused();
      await page.getByRole('link', { name: 'Note', exact: true }).click();
      await expect(page).toHaveURL(/#note$/);
      await expect(page.getByText('Small things deserve attention.')).toBeInViewport();
      await page.goto('about:blank');
      await page.goto(`${floraUrl}#note`);
      await expect(page.getByText('Small things deserve attention.')).toBeInViewport();
      await page.goto('about:blank');
      await page.goto(`${floraUrl}#gallery`);
      await expect(page.locator('#gallery .flora-section-heading')).toBeInViewport();
      if (pages) {
        await page.goto(`${floraUrl}index.html`);
        await expect(page.getByRole('heading', { name: 'Flora Studies', exact: true })).toBeVisible();
      }
      await page.getByRole('link', { name: 'Portfolio', exact: true }).click();
      await expect(page).toHaveURL(`${baseURL}/`);
      expect(errors).toEqual([]);
    });
  });
}
