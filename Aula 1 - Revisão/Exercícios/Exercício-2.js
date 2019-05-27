//Crie uma função que dado um intervalo (entre x e y) 
// exiba todos número pares.
//Exemplo: se x = 10 e y = 20, deverá ser percorrido de 10 até 20.

function pares(x, y) {
    for (let i = x; i <= y; i++) {
        if (x % 2 == 0) {
            console.log(x);
        }
        x++;
    }
}