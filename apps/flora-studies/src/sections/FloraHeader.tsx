export default function FloraHeader({ portfolioUrl }: { portfolioUrl: string }) {
  return (
    <header className="topbar">
      <a className="brand" href={portfolioUrl} aria-label="Back to Zoltan Rendes portfolio">ZR</a>
      <nav className="nav" aria-label="Flora Studies navigation">
        <a href={portfolioUrl}>Portfolio</a>
        <a href="#gallery">Gallery</a>
        <a href="#note">Note</a>
      </nav>
    </header>
  );
}
