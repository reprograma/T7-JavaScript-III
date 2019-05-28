# T7-JavaScript-III

# Aula 1: [link](https://github.com/reprograma/T7-JavaScript-III/blob/master/Aula%201%20-%20Revis%C3%A3o/%7Breprograma%7D%20-%20Revis%C3%A3o.pdf)

#Aula 2:

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




