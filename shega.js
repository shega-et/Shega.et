// === Responsive Navbar Toggle ===
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  document.addEventListener('click', function (e) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
}

// === Language Switcher ===
const langSwitcher = document.getElementById('langSwitcher');
if (langSwitcher) {
  const savedLang = localStorage.getItem('shegaLang');
  if (savedLang) {
    loadLanguage(savedLang);
    langSwitcher.value = savedLang;
  }

  langSwitcher.addEventListener('change', function () {
    const selectedLang = langSwitcher.value;
    localStorage.setItem('shegaLang', selectedLang);
    loadLanguage(selectedLang);
  });
}

function loadLanguage(lang) {
  // Remove old language elements
  document.querySelectorAll('[data-lang]').forEach(el => el.remove());

  // Load new language script
  const script = document.createElement('script');
  script.src = `lang/${lang}.js`;
  script.setAttribute('data-lang', lang);
  document.body.appendChild(script);
}

// === Dark Mode Toggle ===
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const savedTheme = localStorage.getItem('shegaTheme');
  if (savedTheme) document.body.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('shegaTheme', currentTheme);
  });
}

// === Contact Form Handler ===
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
      document.getElementById('formMessage').textContent = 'Please fill out all fields.';
      return;
    }

    document.getElementById('formMessage').textContent =
      'Thank you for contacting us! We will get back to you soon.';
    contactForm.reset();
  });
}

// === Page-Specific Logic ===
document.addEventListener('DOMContentLoaded', () => {
  const pageTitle = document.title.toLowerCase();

  if (pageTitle.includes('events')) {
    console.log('Events page loaded');
    // Future: fetch events from API or local JSON
  }

  if (pageTitle.includes('news')) {
    console.log('News page loaded');
    // Future: load dynamic articles
  }
});
