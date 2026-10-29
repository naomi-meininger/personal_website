// Scroll reveal: anything with class "reveal" fades up the first time it scrolls into view;
// "reveal-credit" items slide in from the left and draw their dotted leader.
// Content is visible by default; it is only hidden once this runs, and never for
// visitors who prefer reduced motion.
export function setupReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return () => {};

  document.documentElement.classList.add("reveal-ready");
  const watched = new WeakSet();

  const io = new IntersectionObserver(
    (entries) => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        // Stagger items that arrive together, capped so long lists don't drag.
        el.style.setProperty("--reveal-delay", `${Math.min(order++, 6) * 80}ms`);
        el.classList.add("in");
        io.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );

  const observeNew = () => {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (!watched.has(el)) {
        watched.add(el);
        io.observe(el);
      }
    });
  };

  observeNew();
  // Catch items React adds later, like projects shown by the filter.
  const mo = new MutationObserver(observeNew);
  mo.observe(document.getElementById("root"), { childList: true, subtree: true });

  return () => {
    io.disconnect();
    mo.disconnect();
  };
}
