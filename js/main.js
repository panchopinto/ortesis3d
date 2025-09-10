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
