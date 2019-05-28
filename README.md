# T7-JavaScript-III

# Aula 1: [link](https://github.com/reprograma/T7-JavaScript-III/blob/master/Aula%201%20-%20Revis%C3%A3o/%7Breprograma%7D%20-%20Revis%C3%A3o.pdf)

# Aula 2:

**Trabalhando com Strings**

As strings são representadas no JavaScript utilizando as aspas simples 'minha string' ou aspas duplas "minha string". Mas para algumas tarefas em JS, por exemplo, para trabalhar com múltiplas linhas, o código precisava ser assim:

```js
const text = 'primeira linha\n' +
             'segunda linha\n' +
             'terceira linha.';

console.log(text);

// > primeira linha
//   segunda linha
//   terceira linha
```
Era o operador + para concatenar as strings e também utilizar o \n para indicar uma quebra de linha.
Outro bem chatinho de trabalhar com strings era essa parte da concatenação, onde precisávamos quebrar a string e usar o + para juntar com nossa variável. Dessa forma:

```js
const name = 'Reprograma';

console.log('Hello ' + name + '!');

// > Hello Reprograma!
```
Precisávamos inclusive prestar atenção para não esquecer o espaço depois da palavra, porque senão juntava com a variável.

**Trabalhando com Strings no ES6**

Com a chegada do ES6, surgiu essa coisa maravilhosa que é o Template String. Agora basta utilizarmos o símbolo de crase ` na string e conseguimos criar interpolações e concatenar muito mais facilmente.
Por exemplo:

```js
const text = `Primeira linha
              Segunda linha
              Terceira linha.`;

console.log(text);

// > Primeira linha
//   Segunda linha
//   Terceira linha
```

E para trabalhar com interpolação, podemos utilizar a sintaxe **${variavel}** dentro da string, desse forma:

```js
const name = 'Reprograma';

console.log(`Hello ${name}!`);

// > Hello Reprograma!
```

#Arrow Function

**O que são e como funcionam as Arrow Functions?**

A nova versão do JavaScript, a ES6, trouxe novas features e dentre elas uma nova forma de criar funções usando o operador =>. Esta nova forma de se trabalhar com funções são chamadas Arrow Functions.

Vejamos um exemplo de como declarar arrow functions:

```js
const sum = (num1, num2) => {
  return num1 + num2;
}
console.log(sum(1, 2));
```

Podemos encurtar ainda mais a sintaxe de uma arrow function, desde que ela possua apenas uma declaração:

```js
const sum = (num1, num2) => num1 + num2;
```

Ou seja, uma expressão arrow function possui uma sintaxe mais curta, semelhante as expressões lambda presente em linguagens como Java, F# entre outras.
As arrow functions possuem dois benefícios:

São menos verbosas do que as funções tradicionais
Seu valor de this é definido à partir das funções onde foram definidas. Ou seja, não é mais necessário fazer bind().

[Referência](https://medium.com/@raphalima8/arrow-functions-declara%C3%A7%C3%A3o-funcionamento-escopos-e-o-valor-de-this-9cb6449bca31)

**This no Arrow Function**

O objeto this se refere ao objeto na qual estamos interagindo naquele contexto, por exemplo:

```js
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function() { 
    console.log(this)});
```

Neste console.log o retorno será o próprio botão. 
Mas se eu trocar para uma arrow function o resultado será diferente, pois ela trabalha em cima de todo o contexto em que ele está acontecendo.

```js
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => { 
console.log(this)});
```

o contexto desse objeto será a window.

[Exemplo](https://github.com/reprograma/T7-JavaScript-III/blob/master/Aula%202/Exemplos/Arrow%20function%20-%20this.html)

**Trabalhando com Array**

**Principais Métodos**
**concat** faz cópia simples do Array e adiciona os argumentos 
**join** cria um string do Array. Adiciona o argumento como cola entre cada membro do Array. 
**shift** remove e retorna o primeiro elemento 
**pop** remove e retorna o ultimo elemento 
**unshift** anexa os argumentos na frente do Array  
**push** anexa os argumentos no final do Array  
**reverse** inverte o Array sem copiá-lo 
**slice** faz cópia simples da porção do Array delimitada por argumentos do índice 
**splice** remove elementos especificados do Array, e os substitui com argumentos adicionais opcionais 
**sort** classifica o Array sem copiá-lo, opcionalmente usando um argumento comparador 
**toString** chama join sem passar um argumento