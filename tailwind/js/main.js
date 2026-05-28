// ─── Navbar scroll ───────────────────────────────────────
const navbar     = document.getElementById('navbar');
const navAnchors = document.querySelectorAll('.nav-link');
const sections   = document.querySelectorAll('section[id]');

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id));
    }
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ─── Mobile menu ─────────────────────────────────────────
const navToggle  = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinksEl.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
navAnchors.forEach(a => a.addEventListener('click', () => {
  navLinksEl.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// ─── Carousel ────────────────────────────────────────────
const track = document.getElementById('carouselTrack');
if (track) {
  const dots  = Array.from(document.querySelectorAll('.carousel-dot'));
  const total = track.children.length;
  let current = 0, timer;

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  document.getElementById('carouselNext').addEventListener('click', () => { goTo(current + 1); resetTimer(); });
  document.getElementById('carouselPrev').addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetTimer(); }));
  resetTimer();
}

// ─── Fade-up (sections) ──────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── Formation cards — staggered cascade ─────────────────
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); cardObserver.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.formation-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
  cardObserver.observe(card);
});

// ─── Formation cards — equal height ──────────────────────
function equalizeFormationCards() {
  const cards = document.querySelectorAll('.formation-card');
  cards.forEach(c => c.style.minHeight = '');
  const maxH = Math.max(...[...cards].map(c => c.offsetHeight));
  cards.forEach(c => c.style.minHeight = maxH + 'px');
}
window.addEventListener('load', equalizeFormationCards);
window.addEventListener('resize', equalizeFormationCards);
