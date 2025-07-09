(function () {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const applyTheme = (theme) => {
    if (theme === 'dark' || (theme === 'system' && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Aplica el tema al cargar
  const theme = savedTheme || 'system';
  applyTheme(theme);
})();
