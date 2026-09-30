function setupInkMarks() {
  document.querySelectorAll('.ink-mark--draw').forEach((path) => {
    const length = path.getTotalLength();
    path.style.setProperty('--len', String(Math.ceil(length)));
  });
}

function setupReveal() {
  const targets = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.22 }
  );
  targets.forEach((el) => observer.observe(el));
}

function init() {
  setupInkMarks();
  setupReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
