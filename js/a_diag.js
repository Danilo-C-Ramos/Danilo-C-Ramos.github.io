document.addEventListener('DOMContentLoaded', function () {
    // Passo 1: Pega o nome do arquivo da página atual
    const nomeArquivo = window.location.pathname.split('/').pop(); // Exemplo: "atividade123.html"
    console.log(nomeArquivo)
    
    // Passo 2: Usa uma expressão regular para pegar o número antes de ".html"
    const numeroAtual = nomeArquivo.match(/(\d+)(?=\.html$)/);

    if (numeroAtual) {
        const numero = parseInt(numeroAtual[0], 10); // Converte o número extraído em inteiro
        if (numero >= 3) {
            novoLink = 'desempenho.html'; // Se o número for maior ou igual a 2, vai para "fim.html"
        } else {
            const proximoNumero = numero + 1; // Caso contrário, incrementa o número
            novoLink = `a_diag${proximoNumero}.html`;
        }
    } else {
        novoLink = 'desempenho.html'; // Caso não encontre o número, define como 'fim.html'
    }

    const alternativas = document.querySelectorAll('li');

    const main = document.querySelector('main');

    for (const alt of alternativas) {
        alt.addEventListener('click', function (event) {
            const clickedAlt = event.target;
            console.log(clickedAlt);
            clickedAlt.style.backgroundColor = '#1D734F';
            clickedAlt.style.color = 'white';

            div = document.createElement('div');
            div.className = 'explicacao';
            main.appendChild(div);

            texto = document.createElement('h2');
            texto.className = 'texto-final';
            texto.innerHTML = 'Parabéns, voce acertou!';
            continuar = document.createElement('a');
            continuar.innerHTML = 'Continuar'
            continuar.className = 'continuar'
            continuar.href = novoLink

            div.appendChild(texto);
            div.appendChild(continuar);
            
            alternativas.forEach(function (alt) {
                alt.style.pointerEvents = 'none'; // Bloqueia todos os cliques
            });

        });
        
    }

});
