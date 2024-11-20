document.addEventListener('DOMContentLoaded', function() {

    botoes = document.querySelectorAll("li")

    nova_atividade = botoes[0]

    nova_atividade.addEventListener('click', function(event) {
        window.location.href = "atividade1.html";
    })

    grafico = botoes[1]

    linha_diagnostico = botoes[2]

    linha = linha_diagnostico.querySelectorAll("li")

    diagnostico = linha[0]

    diagnostico.addEventListener('click', function(event) {
        window.location.href = "diagnostico.html";
    })

    materias = linha[1]
    materias.addEventListener('click', function(event) {
        window.location.href = "materias.html";
    })

})