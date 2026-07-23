// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('[data-anim],[data-anim-l],[data-anim-r]').forEach(el => observer.observe(el));

// Navbar scroll
window.addEventListener('scroll', () => {
  document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
function toggleMenu() { document.getElementById('mobile-nav').classList.toggle('open'); }
function closeMenu() { document.getElementById('mobile-nav').classList.remove('open'); }

// Active nav link
(function() {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();
