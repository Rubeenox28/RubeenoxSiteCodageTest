// Message de bienvenue
document.addEventListener("DOMContentLoaded", function () {
    alert("Bienvenue sur le site !");
});

// Bouton interactif
const buttons = document.querySelectorAll("a");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Merci d'avoir cliqué sur ce lien !");
    });
});
