/* ─── Theme toggle ─── */
(function () {
  const STORAGE_KEY = 'theme';
  const html        = document.documentElement;

  // Load saved theme or default to dark
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'light') {
    html.setAttribute('data-theme', 'light');
  } else {
    html.removeAttribute('data-theme'); // dark is default
  }

  // Toggle handler
  window.toggleTheme = function () {
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
      localStorage.setItem(STORAGE_KEY, 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem(STORAGE_KEY, 'light');
    }
  };
})();
