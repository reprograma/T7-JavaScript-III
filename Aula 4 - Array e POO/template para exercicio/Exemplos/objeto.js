let objeto = {
    num1: 10,
    num2: 20,
    soma: function soma() {
        return this.num1 + this.num2
    }
}

function soma() {
   console.log(objeto.num1 + objeto.num2);
}

