(() => {
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (isIOS && !standalone && !sessionStorage.getItem('adapta-install-hint')) {
    const hint = document.createElement('aside');
    hint.className = 'install-hint';
    hint.setAttribute('role', 'status');
    hint.innerHTML = '<strong>Instala ADAPTA</strong><span>En Safari, toca Compartir y luego “Añadir a pantalla de inicio”.</span><button type="button" aria-label="Cerrar">×</button>';
    document.body.append(hint);
    hint.querySelector('button').addEventListener('click', () => { sessionStorage.setItem('adapta-install-hint', '1'); hint.remove(); });
  }
})();
