document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: .12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});



// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav .nav') || document.querySelector('.nav');
  if(!btn || !nav) return;

  function closeMenu(){
    btn.setAttribute('aria-expanded','false');
    nav.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
  function openMenu(){
    btn.setAttribute('aria-expanded','true');
    nav.classList.add('open');
    document.body.classList.add('no-scroll');
  }
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMenu();
  });

  // Close when clicking a link (for SPA-like behavior)
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(a) closeMenu();
  });
});
