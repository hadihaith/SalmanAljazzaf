const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

// Lift the preloader once the page (and fonts) are ready
const minimumIntro = new Promise((r) => setTimeout(r, reduceMotion ? 0 : 1300));
Promise.all([minimumIntro, document.fonts?.ready]).then(() => {
  document.body.classList.remove('is-loading');
});

// Split headings into words so each can slide up on its own
document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
  let wi = 0;
  const wrap = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      for (const part of (node.textContent ?? '').split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) {
          frag.append(part);
          continue;
        }
        const outer = document.createElement('span');
        outer.className = 'w';
        const inner = document.createElement('span');
        inner.style.setProperty('--wi', String(wi++));
        inner.textContent = part;
        outer.append(inner);
        frag.append(outer);
      }
      node.parentNode?.replaceChild(frag, node);
    } else {
      [...node.childNodes].forEach(wrap);
    }
  };
  [...el.childNodes].forEach(wrap);
});

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
document
  .querySelectorAll('[data-reveal], [data-split], .eyebrow')
  .forEach((el) => revealObserver.observe(el));

// Count stats up from zero when they appear
function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count ?? 0);
  const suffix = el.dataset.suffix ?? '';
  if (reduceMotion || target === 0) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 1800;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
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

// Tabs: slide the indicator and replay the reveal for the newly shown panel
document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((tabs) => {
  const buttons = [...tabs.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = [...tabs.querySelectorAll<HTMLElement>('[role="tabpanel"]')];
  const indicator = tabs.querySelector<HTMLElement>('.tab-indicator');

  const moveIndicator = () => {
    const active = buttons.find((b) => b.getAttribute('aria-selected') === 'true');
    if (!active || !indicator) return;
    indicator.style.setProperty('--x', `${active.offsetLeft}px`);
    indicator.style.setProperty('--y', `${active.offsetTop}px`);
    indicator.style.setProperty('--w', `${active.offsetWidth}px`);
    indicator.style.setProperty('--h', `${active.offsetHeight}px`);
  };

  const select = (index: number) => {
    buttons.forEach((b, i) => {
      b.setAttribute('aria-selected', String(i === index));
      b.tabIndex = i === index ? 0 : -1;
    });
    panels.forEach((p, i) => (p.hidden = i !== index));
    const items = panels[index].querySelectorAll<HTMLElement>('[data-reveal]');
    items.forEach((el) => {
      revealObserver.unobserve(el);
      el.classList.remove('is-visible');
    });
    void panels[index].offsetWidth; // restart the transitions
    items.forEach((el) => el.classList.add('is-visible'));
    moveIndicator();
  };

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => select(i));
    button.addEventListener('keydown', (e) => {
      const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      const next = (i + step + buttons.length) % buttons.length;
      buttons[next].focus();
      select(next);
    });
  });

  moveIndicator();
  window.addEventListener('resize', moveIndicator);
  document.fonts?.ready.then(moveIndicator);
});

// Rotating tagline in the hero
const rotator = document.querySelector<HTMLElement>('[data-rotate]');
if (rotator && !reduceMotion) {
  const words: string[] = JSON.parse(rotator.dataset.rotate ?? '[]');
  let index = 0;
  setInterval(() => {
    rotator.classList.add('is-out');
    setTimeout(() => {
      index = (index + 1) % words.length;
      rotator.textContent = words[index];
      rotator.classList.remove('is-out');
    }, 450);
  }, 2800);
}

// Scroll-linked effects: progress bar, header, timelines, parallax
const progress = document.querySelector<HTMLElement>('.scroll-progress');
const header = document.querySelector<HTMLElement>('.site-header');
const timelines = document.querySelectorAll<HTMLElement>('.timeline');
const parallax = document.querySelectorAll<HTMLElement>('[data-parallax]');

let ticking = false;
function onScroll() {
  ticking = false;
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress?.style.setProperty('--progress', String(max > 0 ? y / max : 0));
  header?.classList.toggle('is-scrolled', y > 24);

  for (const tl of timelines) {
    const rect = tl.getBoundingClientRect();
    const visible = (window.innerHeight * 0.7 - rect.top) / rect.height;
    tl.style.setProperty('--draw', String(Math.min(Math.max(visible, 0), 1)));
  }

  if (!reduceMotion) {
    for (const el of parallax) {
      const speed = Number(el.dataset.parallax ?? 0.2);
      el.style.setProperty('--py', `${y * speed}px`);
    }
  }
}
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
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

if (!reduceMotion && finePointer) {
  // Cursor-following glow on cards
  document.querySelectorAll<HTMLElement>('.card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });

  // 3D tilt
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const strength = Number(el.dataset.tilt || 8);
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.classList.add('is-tilting');
      el.style.setProperty('--rx', `${-y * strength}deg`);
      el.style.setProperty('--ry', `${x * strength}deg`);
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });

  // Magnetic buttons
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });

  // Hero: layers drift with the mouse, and a spotlight follows it
  const hero = document.querySelector<HTMLElement>('.hero');
  hero?.addEventListener('pointermove', (e) => {
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--hx', String((e.clientX - rect.left) / rect.width - 0.5));
    hero.style.setProperty('--hy', String((e.clientY - rect.top) / rect.height - 0.5));
    hero.style.setProperty('--sx', `${e.clientX - rect.left}px`);
    hero.style.setProperty('--sy', `${e.clientY - rect.top}px`);
  });
}
