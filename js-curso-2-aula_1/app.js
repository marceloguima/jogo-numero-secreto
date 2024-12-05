let numeroSecreto = numeroAleatorio()
let chute = document.getElementById("numeroChutado")

function verificarChute() {
    let chute = document.querySelector("input").value
    if (chute == numeroSecreto) {
        alert("parabens")

    }
    else {
        alert("errou")
    }
}


function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTexto("h1", "jogo do número secreto");
exibirTexto("p", "Escolha um número de 1 a 10");

function numeroAleatorio() {
    return parseInt(Math.random() * 2 + 1)

}


