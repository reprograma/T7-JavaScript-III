# Exercícios

## 1º exercício

Crie um array de alunas contendo as informações: nome, idade, materia_preferida, conforme exemplo abaixo:

```js
const alunas = [
    { nome: "XXX", idade: 23, materia_preferida: "JavaScript" },
    { nome: "ZZZ", idade: 15, materia_preferida: "JQuery" },
    { nome: "AAA", idade: 30, materia_preferida: "Bootstrap" }
  ];

```

 e utilizando os métodos de array (map, reduce, filter e find):

### 1.1 Utilizando o `map`

Percorra o array alunas e retorne outro array contendo apenas as idades de todas as alunas. Exemplo:

```js
[
  23,
  15,
  30
]
```


### 1.2 Utilizando o `filter`

Retorne um array que contenha os dados da alunas que tem a idade maior que 24. Exemplo:

```js
[
  {  nome: "AAA", idade: 30, materia_preferida: "Bootstrap" }
]
```

### 1.3 Utilizando o `find`

Retorne um array que encontre as alunas na qual a matéria preferida seja JavaScript. Exemplo:

```js
[
  { nome: "XXX", idade: 23, materia_preferida: "JavaScript" }
]
```





