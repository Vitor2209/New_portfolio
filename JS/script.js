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

