export function SkipToContent() {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-[var(--radius-lg)] focus:shadow-[var(--elevation-sm)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      style={{
        fontFamily: 'var(--font-outfit)',
        fontSize: 'var(--text-base)',
        fontWeight: 600
      }}
    >
      Skip to main content
    </a>
  );
}
