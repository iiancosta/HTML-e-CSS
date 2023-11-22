//1. const: serve para ler um valor, no caso "resultado"
//2. document: se referencia ao html
//3. querySelector: referencia o que será selecionado
const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');

function insert(valor){
    resultado.innerHTML += valor; 
}

function clean(){
    resultado.innerHTML = '  ';
}