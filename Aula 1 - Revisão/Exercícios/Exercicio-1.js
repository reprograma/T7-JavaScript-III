//Crie uma função que 
//leia um valor 
//e exiba se ele é par ou ímpar.

function parImpar(valor) {
    if (typeof (valor) === 'number') {
        if (valor % 2 == 0) {
            console.log("Número par!");
        }
        else if (valor % 2 != 0) {
            //  else {
            console.log("Número ímpar!");
        }
    }
    else {
        console.log('Digite um número válido!');
    }
}