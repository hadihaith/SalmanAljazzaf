const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal elements as they scroll into view
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

// Count stats up from zero when they appear
function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count ?? 0);
  const suffix = el.dataset.suffix ?? '';
  if (reduceMotion || target === 0) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 1600;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      animateCount(entry.target as HTMLElement);
      countObserver.unobserve(entry.target);
    }
  },
  { threshold: 0.6 },
);
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countObserver.observe(el));

// Scroll progress bar, header state, and timeline line drawing
const progress = document.querySelector<HTMLElement>('.scroll-progress');
const header = document.querySelector<HTMLElement>('.site-header');
const timelines = document.querySelectorAll<HTMLElement>('.timeline');

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress?.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0));
  header?.classList.toggle('is-scrolled', window.scrollY > 24);

  for (const tl of timelines) {
    const rect = tl.getBoundingClientRect();
    const visible = (window.innerHeight * 0.75 - rect.top) / rect.height;
    tl.style.setProperty('--draw', String(Math.min(Math.max(visible, 0), 1)));
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section in view
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav a[href^="#"]');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((a) =>
        a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`),
      );
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));

// Cursor-following glow on cards
if (!reduceMotion) {
  document.querySelectorAll<HTMLElement>('.card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}
