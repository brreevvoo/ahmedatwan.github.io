(() => {
  const root = document.documentElement;
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  const themeButton = document.querySelector('.theme-toggle');
  const themeOrder = { light: 'dark', dark: 'system', system: 'light' };
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(mode, persist = true) {
    root.dataset.theme = mode;
    root.dataset.effectiveTheme = mode === 'system' ? (systemDark.matches ? 'dark' : 'light') : mode;
    document.querySelector('meta[name="theme-color"]').content = root.dataset.effectiveTheme === 'dark' ? '#151515' : '#f5f5f2';
    themeButton.dataset.mode = mode;
    const nextLabel = themeButton.dataset[themeOrder[mode]];
    themeButton.setAttribute('aria-label', nextLabel);
    themeButton.title = nextLabel;
    if (persist) {
      try { localStorage.setItem('atwan-theme', mode); } catch (_) { /* private browsing */ }
    }
  }
  setTheme(['light', 'dark', 'system'].includes(root.dataset.theme) ? root.dataset.theme : 'light', false);
  themeButton.addEventListener('click', () => setTheme(themeOrder[root.dataset.theme]));
  systemDark.addEventListener('change', () => {
    if (root.dataset.theme === 'system') setTheme('system', false);
  });

  function closeMenu(restoreFocus = false) {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', menuButton.dataset.open);
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? menuButton.dataset.close : menuButton.dataset.open);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
  });

  const dialog = document.querySelector('.certificate-dialog');
  const image = dialog.querySelector('.dialog-image img');
  const title = dialog.querySelector('#dialog-title');
  const official = dialog.querySelector('.dialog-official');
  const pdf = dialog.querySelector('.dialog-pdf');
  const verify = dialog.querySelector('.dialog-verify');
  const close = dialog.querySelector('.dialog-close');
  let origin = null;
  document.querySelectorAll('.preview-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      origin = trigger;
      image.src = trigger.dataset.image;
      image.alt = `${dialog.dataset.certificateAlt} ${trigger.dataset.title}`;
      title.textContent = trigger.dataset.title;
      official.textContent = trigger.dataset.official;
      official.hidden = root.lang !== 'ar';
      pdf.href = trigger.dataset.pdf;
      verify.href = trigger.dataset.verify;
      dialog.showModal();
      document.body.classList.add('dialog-open');
      close.focus();
    });
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    image.removeAttribute('src');
    origin?.focus();
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();
