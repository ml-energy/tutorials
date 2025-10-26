(function(){
  const storageKey = 'mlenergy-theme';
  const apply = (mode) => {
    document.body.classList.remove('force-light','force-dark');
    if (mode === 'light') document.body.classList.add('force-light');
    if (mode === 'dark')  document.body.classList.add('force-dark');
    document.documentElement.style.colorScheme = (mode==='light'?'light':'dark');
    const label = mode==='light' ? '☀️ Light' : '🌙 Dark';
    const btn = document.getElementById('themeBtn'); if (btn) btn.textContent = label;
  };
  const init = () => { apply(localStorage.getItem(storageKey)||'dark'); };
  const flip = () => {
    const cur = localStorage.getItem(storageKey)||'dark';
    const next = cur==='light' ? 'dark' : 'light';
    localStorage.setItem(storageKey, next); apply(next);
  };
  window.addEventListener('DOMContentLoaded', () => {
    init();
    const b = document.getElementById('themeBtn'); if (b) b.addEventListener('click', flip);
  });
})();
