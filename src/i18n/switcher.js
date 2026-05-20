import { translations } from './translations.js';

let currentLang = 'en';

export function initLanguage() {
  const storedLang = localStorage.getItem('lang');
  if (storedLang && ['en', 'el'].includes(storedLang)) {
    currentLang = storedLang;
  }
  
  applyTranslations();
  updateDocumentLang();
  
  // Set up toggle buttons if they exist
  const toggles = document.querySelectorAll('.lang-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  });
  
  // Initial state for toggle text
  updateToggleText();
}

export function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'el' : 'en';
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
  const toggles = document.querySelectorAll('.lang-toggle-text');
  toggles.forEach(el => {
    // Show the language that clicking will switch TO, or show both with the active one highlighted
    if (currentLang === 'en') {
      el.innerHTML = '<span style="color:var(--primary-dark)">🇬🇧 EN</span> <span style="opacity:0.5">|</span> <span style="opacity:0.5">🇬🇷 EL</span>';
    } else {
      el.innerHTML = '<span style="opacity:0.5">🇬🇧 EN</span> <span style="opacity:0.5">|</span> <span style="color:var(--primary-dark)">🇬🇷 EL</span>';
    }
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', initLanguage);
// For Astro view transitions (if enabled)
document.addEventListener('astro:page-load', initLanguage);
