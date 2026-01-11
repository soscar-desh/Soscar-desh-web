// Mobile nav toggle and accessibility
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('hidden');
});

// Close mobile menu when a nav link is clicked (helpful on small screens)
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.getComputedStyle(navToggle).display !== 'none') {
      navList.classList.add('hidden');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Highlight active nav link based on hash
const navLinks = document.querySelectorAll('.nav a');
function updateActiveLink() {
  const hash = location.hash || '#hero';
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === hash);
  });
}
window.addEventListener('hashchange', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', a.getAttribute('href'));
      updateActiveLink();
    }
  });
});

// Contact form handler (shows inline status). Replace this with a real endpoint when ready.
const form = document.getElementById('contact-form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const statusEl = document.getElementById('form-status');
  const data = {
    name: document.getElementById('name')?.value || '',
    email: document.getElementById('email')?.value || '',
    message: document.getElementById('message').value || ''
  };

  // Show a quick client-side confirmation (no network request yet)
  if (statusEl) {
    statusEl.classList.remove('hidden');
    statusEl.textContent = 'Thanks! Your message was received.';
  } else {
    alert('Thanks! Your message was received.');
  }
  form.reset();
  console.log('Contact submit', data);
});