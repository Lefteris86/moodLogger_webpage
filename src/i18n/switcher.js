import { translations } from './translations.js';

let currentLang = 'en';

export function initLanguage() {
  const storedLang = localStorage.getItem('lang');
  if (storedLang && ['en', 'el'].includes(storedLang)) {
    currentLang = storedLang;
  }
  
  applyTranslations();
  updateDocumentLang();
  
  // Set up dropdown options
  const options = document.querySelectorAll('.lang-option');
  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = opt.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });
  
  // Initial state for toggle text
  updateToggleText();
}

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', currentLang);
  
  // Handle privacy page redirection
  const path = window.location.pathname;
  if (path.includes('/privacy')) {
    if (currentLang === 'el' && !path.includes('/privacy-el')) {
      window.location.href = '/privacy-el';
      return;
    } else if (currentLang === 'en' && path.includes('/privacy-el')) {
      window.location.href = '/privacy';
      return;
    }
  }
  
  applyTranslations();
  updateDocumentLang();
  updateToggleText();
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  const dict = translations[currentLang];
  
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // Use innerHTML because some translations contain HTML tags (e.g. <br/>, <em>, <strong>)
      el.innerHTML = dict[key];
    }
  });

  // Handle placeholders in the form
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Handle privacy page links
  const privacyLinks = document.querySelectorAll('a[href*="/privacy"]');
  privacyLinks.forEach(link => {
    if (currentLang === 'el') {
      if (!link.href.includes('/privacy-el')) {
        link.href = link.href.replace('/privacy', '/privacy-el');
      }
    } else {
      if (link.href.includes('/privacy-el')) {
        link.href = link.href.replace('/privacy-el', '/privacy');
      }
    }
  });
}

function updateDocumentLang() {
  document.documentElement.lang = currentLang;
}

function updateToggleText() {
  const flags = document.querySelectorAll('#lang-flag-current');
  flags.forEach(el => {
    el.textContent = currentLang === 'en' ? '🇬🇧' : '🇬🇷';
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', initLanguage);
// For Astro view transitions (if enabled)
document.addEventListener('astro:page-load', initLanguage);
