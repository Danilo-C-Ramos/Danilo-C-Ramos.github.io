document.addEventListener('DOMContentLoaded', function() {
   const overlay = document.querySelector(".loading-spinner");

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

    // Simula carregamento por 3 segundos
    setTimeout(() => {
    overlay.classList.add("hidden"); // Esconde o overlay após "carregamento"
    window.location.href = "index.html";
    }, 3000);
});
})



  