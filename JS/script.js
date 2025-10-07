function enviarWhats(event) {
     event.preventDefault()

     const nome = document.getElementById('nome').value;
     const mensagem = document.getElementById('mensagem').value;
     const telefone = '447785314195';

     const texto = `me chamo ${nome}. ${mensagem}`;
     const msgFormatada = encodeURIComponent(texto);

     const url = `https://wa.me/${447785314195}?text=${msgFormatada}`;

     window.open(url, '_blank');

}

// Menu lateral mobile
     const menuBtn = document.getElementById('menu-btn');
     const menu = document.getElementById('menu');

     menuBtn.addEventListener('click', () => {
          menu.classList.toggle('active');
     });

     // Fecha o menu ao clicar em um link
     menu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
               menu.classList.remove('active');
          });
     });

