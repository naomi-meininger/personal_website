import { links, pages } from "../data/links.js";

export function ExternalLink({ href, children, className = "text-link" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

function Header({ current }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="wordmark" href="index.html">Naomi Meininger</a>
        <nav className="site-nav" aria-label="Main">
          <ul>
            {pages.map((page) => (
              <li key={page.id}>
                <a href={page.href} aria-current={page.id === current ? "page" : undefined}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <h2>Get in touch</h2>
        <p>Email is the best way to reach me.</p>
        <div className="actions">
          <a className="button" href={`mailto:${links.email}`}>Email me</a>
          <ExternalLink href={links.resume}>Résumé (PDF)</ExternalLink>
          <ExternalLink href={links.github}>GitHub</ExternalLink>
          <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
        </div>
        <p className="fine">© Naomi Meininger</p>
      </div>
    </footer>
  );
}

export default function Layout({ current, children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
