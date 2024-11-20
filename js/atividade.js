document.addEventListener('DOMContentLoaded', function() {
    alternativas = document.querySelectorAll('li')

    alt_A = alternativas[0]
    alt_B = alternativas[1]
    alt_C = alternativas[2]
    alt_D = alternativas[3]

    alt_D.addEventListener('click', function(event) {
        alt_D.style.backgroundColor = '#1D734F'
    })


})