document.addEventListener('DOMContentLoaded', function() {
    const circulo = document.querySelector(".loading-spinner");
    const overlay = document.querySelector(".loading-overlay");

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log('teste')
    const user = document.getElementById("Usuario").value;
    const password = document.querySelector("input[type='password']").value;

    localStorage.setItem("user", user);
    localStorage.setItem("password", password);

    console.log(user)
    console.log(password)

    overlay.classList.remove("hidden");
    circulo.classList.remove("hidden");
    
    // Simula carregamento por 3 segundos
    setTimeout(() => {
    circulo.classList.add("hidden");
    circulo.classList.add("hidden");
    window.location.href = "home.html";
    }, 2000);
});
})



  