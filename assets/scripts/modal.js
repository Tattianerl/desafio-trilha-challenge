 function abrirModal() {
      const modal = document.getElementById('iframeModal');
      const conteudoModal = document.getElementById('conteudoModal');
      modal.style.display = 'flex';
      document.body.classList.add('modal-aberto');

      // Carrega o conteúdo da mentoria.html dinamicamente
      fetch('./mentoria.html')
        .then(res => res.text())
        .then(html => {
          conteudoModal.innerHTML = html;
        });
    }

    function fecharModal() {
      const modal = document.getElementById('iframeModal');
      modal.style.display = 'none';
      document.body.classList.remove('modal-aberto');
    }

    // Fechar clicando fora
    document.getElementById('iframeModal').addEventListener('click', function (e) {
      if (e.target === this) fecharModal();
    });
