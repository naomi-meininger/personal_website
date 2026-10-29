import { useEffect } from "react";
import { links, pages } from "../data/links.js";
import { setupReveal } from "../reveal.js";

// When arriving from a link like projects.html#alarm, scroll to and highlight that entry.
// (React renders after the browser's own jump to the hash, so it has to be done here.)
function useHashTarget() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = id ? document.getElementById(id) : null;
    if (!el || el.classList.contains("skill")) return;
    el.classList.add("is-target", "in");
    requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
  }, []);
}

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
      <div className="wrap reveal">
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
  useEffect(() => setupReveal(), []);
  useHashTarget();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header current={current} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
