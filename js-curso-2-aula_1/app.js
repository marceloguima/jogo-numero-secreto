let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTexto("h1", "acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabéns! você acertou o número secreto, com  ${tentativas} ${palavraTentativa}`
        exibirTexto("p", mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numeroSecreto) {
            exibirTexto("p", "O número é menor.");
        } else {
            exibirTexto("p", "O número é maior");
        }
        tentativas++
        limparCampo();
    }

    function limparCampo() {
        chute = document.querySelector("input");
        chute.value = "";
    }

}
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTexto("h1", "jogo do número secreto");
    exibirTexto("p", "Escolha um número de 1 a 10");

}

exibirMensagemInicial()

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
     
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true); \aEss

}


