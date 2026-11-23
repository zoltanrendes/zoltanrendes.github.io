import { access, cp, mkdir, rm } from 'node:fs/promises';

const host = new URL('../apps/portfolio/dist-pages/', import.meta.url);
const remote = new URL('../apps/flora-studies/dist-pages/', import.meta.url);
const output = new URL('../dist/pages/', import.meta.url);

await Promise.all([
  access(new URL('index.html', host)),
  access(new URL('index.html', remote)),
  access(new URL('remoteEntry.js', remote)),
]);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(host, output, { recursive: true });
await cp(remote, new URL('flora-studies/', output), {
  recursive: true,
  force: false,
  errorOnExist: true,
});
