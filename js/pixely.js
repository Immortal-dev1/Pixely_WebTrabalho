(() => {
  'use strict';

  // validaçao
  document.querySelectorAll('form.needs-validation').forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        const btn = form.querySelector('button[type=submit]');
        btn?.querySelector('.spinner-border')?.classList.remove('d-none');
        btn?.setAttribute('disabled', '');
      }
      form.classList.add('was-validated');
    });
  });

  document.querySelectorAll('[data-toggle-senha]').forEach(btn => {
    btn.addEventListener('click', () => {
      const campo = btn.closest('.input-group').querySelector('input');s
      const oculto = campo.type === 'password';
      campo.type = oculto ? 'text' : 'password';
      btn.innerHTML = `<i class="bi bi-eye${oculto ? '-slash' : ''}"></i>`;
    });
  });

  // efeito paralax
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const raiz = document.documentElement;
    let esperando = false;
    const atualizar = () => {
      const max = raiz.scrollHeight - innerHeight;
      raiz.style.setProperty('--parallax', max > 0 ? Math.min(scrollY / max, 1) : 0);
      esperando = false;
    };
    addEventListener('scroll', () => {
      if (!esperando) { esperando = true; requestAnimationFrame(atualizar); }
    }, { passive: true });
    addEventListener('resize', atualizar);
    atualizar();
  }
})();
