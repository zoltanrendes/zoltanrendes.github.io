export default function FloraFooter({ portfolioUrl }: { portfolioUrl: string }) {
  return (
    <footer className="footer">
      <span>Flora Studies by Zoltan Rendes</span>
      <span>Personal photography series</span>
      <a href={portfolioUrl}>Back to portfolio</a>
    </footer>
  );
}
