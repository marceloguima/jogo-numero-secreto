function mostrarTitulo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

mostrarTitulo("h1", "Olá mundo!")

function mostrarNome(texto){
    let nome = "marcelo"
    nome.innerHTML = texto
    console.log(texto)

}

mostrarNome("marcelo")

function dobro (numero){
    return numero * 2;
    
}
    let resultado = dobro (100);
    console.log(resultado)


function media(a, b, c){
    return (a + b + c) / 3
}

let resultadoMedia = media(2, 4, 6);
console.log(resultadoMedia)