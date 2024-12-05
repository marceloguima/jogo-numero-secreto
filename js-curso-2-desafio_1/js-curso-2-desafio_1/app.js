const mudarTitulo = document.querySelector("h1");
mudarTitulo.innerHTML = "É hora do desafio!";

function botaoClicado(){
    console.log("O botão foi clicado!")
}

function alerta (){
    alert("Eu amo js!")
}

function botaoPrompet(){
    cidade = prompt("Me fale o nome de um cidade brasileira");
    alert("Estive em " + cidade + "  e lembrei de você!");
}

function somar(){
    primeiroNumero = parseInt(prompt("Digite um número"));
    segundoNumero = parseInt(prompt("Digite outro número"));
    soma = primeiroNumero + segundoNumero;
    alert("O resultado da soma é: " + soma);
}