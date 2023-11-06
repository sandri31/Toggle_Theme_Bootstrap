document.addEventListener('turbo:load', () => {
  const storedTheme = localStorage.getItem('theme') || 'light';

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  };

  const updateActiveThemeIcon = (theme) => {
    const themeIcon = document.querySelector('.theme-icon-active use');
    const themeIcons = {
      light: '#sun-fill',
      dark: '#moon-stars-fill',
      auto: '#circle-half'
    };
    themeIcon.setAttribute('href', themeIcons[theme]);
  };

  const updateThemeSelection = (theme) => {
    document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
      if (element.getAttribute('data-bs-theme-value') === theme) {
        element.classList.add('active');
        element.setAttribute('aria-pressed', 'true');
      }
    });
    updateActiveThemeIcon(theme);
  };

  const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
    updateThemeSelection(theme);
  };

  // Apply the stored or preferred theme
  applyTheme(storedTheme);
  updateThemeSelection(storedTheme);

  document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-bs-theme-value');
      setTheme(theme);
    });
  });
});
