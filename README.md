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

** Trabalhando com Strings no ES6**

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

# Arrow Function

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
* **concat** faz cópia simples do Array e adiciona os argumentos 
* **join** cria um string do Array. Adiciona o argumento como cola entre cada membro do Array. 
* **shift** remove e retorna o primeiro elemento 
* **pop** remove e retorna o ultimo elemento 
* **unshift** anexa os argumentos na frente do Array  
* **push** anexa os argumentos no final do Array  
* **reverse** inverte o Array sem copiá-lo 
* **slice** faz cópia simples da porção do Array delimitada por argumentos do índice 
* **splice** remove elementos especificados do Array, e os substitui com argumentos adicionais opcionais 
* **sort** classifica o Array sem copiá-lo, opcionalmente usando um argumento comparador 
* **toString** chama join sem passar um argumento
* **indexOf** retorna o primeiro elemento igual ao valor especificado, ou -1 *se nenhum for encontrado 
* **lastIndexOf** retorna o último elemento igual ao valor especificado, ou -1 se nenhum for encontrado 
* **forEach** aplica a função fornecida para todos elementos do Array
map cria um novo Array contendo os resultados da aplicação da função a todos elementos do Array 
* **filter** cria um novo Array contendo todos os elementos para os quais a função fornecida retorna verdadeiro 
* **reduce** aplica uma função simultaneamente para dois valores do Array (da esquerda para a direita) de forma a reduzi-los a um valor único 

![map, filter, reduce](https://github.com/reprograma/T7-JavaScript-III/blob/master/Aula%202%20-%20Arrow%20function%2C%20componentes%20e%20template/Exemplos/map%2C%20filter%2C%20reduce.jpeg)

![map, filter, reduce](https://github.com/reprograma/T7-JavaScript-III/blob/master/Aula%202%20-%20Arrow%20function%2C%20componentes%20e%20template/Exemplos/map%2C%20filter%2C%20reduce2.jpeg)


# Aula 4:

**Orientação a Objetos no JavaScript**

De uma forma simples, podemos dizer que orientação a objetos é um modelo de programação baseado na criação de Classes (receitas de bolo), nelas definimos como (atributos) e o que (métodos ou funções) nossos objetos irão ser ou fazer.

**Classes**
Uma classe é a estrutura que contém um determinado conjunto de características, chamadas de atributos/propriedades, ações e chamadas de métodos.


**Objetos**
Objetos são instâncias das classes. Falando de animais, imagine que você tem um gato e um cachorro. Ambos são animais, porém, cada um tem suas características e são seres diferentes. Portanto, cada um seria uma instância da classe animal.

Para entendermos melhor, vamos trabalhar com a estrutura dos objetos e funções construtoras.

```js
let objeto = {
	propriedade1: 1,
	propriedade2: "string",
	propriedade3: function() {
		console.log("você chamou a função.");
    }
};

```

Um objeto pode ser criado com vários tipos de propriedades, inclusive pode conter uma função dentro dele, como no exemplo acima, chamada de declaração literal.
Também é possível adicionar novas propriedades a um objeto após declará-lo. Para isso, basta fazer isto: objeto.novaPropriedade = "o que você quiser aqui".

A declaração literal não é a única maneira de criar objetos em JavaScript. Eles podem ser criados usando a palavra chave "new" de uma "classe" pré-definida, bastando digitar "objeto = new Object();" para se criar um objeto. Com isso, a variável tanto se comportará como um objeto, como virá com algumas propriedades embutidas automaticamente.

**Prototype**
O prototype é um objeto que funciona como uma espécie de repositório de propriedades que toda instância de objeto receberá automaticamente quando for criada usando a palavra chave "new". Nele também é possível armazenar todos os métodos herdados. 
Com isso, pode-se garantir que qualquer propriedade definida no construtor também será herdada. Portanto, se o prototype de da função construtora mudar, o dos objetos criados através do new também mudaram devido aos ponteiros e à natureza dinâmica do JavaScript.


**Função Construtora**
Um construtor é basicamente uma função. Ela pode ser executada como uma função ou pode ser utilizada para instanciar um objeto utilizando a palavra reservada new.

E se eu não usar o new?
Além do erro undefined, ela não utiliza o prototype e executa como uma função qualquer. E o this é referenciado no escopo global -window.

```js
function Pessoa(nome, idade){
	this.nome = nome;
	this.idade = idade;
}

const bruna = new Pessoa('Bruna', 25);
```

this faz referencia ao objeto criado pelo new.
Ao executar a função Cachorro com new, estamos fazendo quatro coisas:

1. criando um novo objeto ({}).
2. definindo o construtor do objeto bruna como Pessoa.
3. definindo o protótipo do objeto bruna como Pessoa.prototype.
4. executando a função Pessoa dentro do escopo do novo objeto, criando assim, uma nova instância.

Utilizando a cadeia de protótipos, podemos atualizar propriedades ou inserir novos métodos em objetos criados a partir de funções construtoras. E considerando que a cada nova instância as funções seriam criadas novamente, é uma boa prática criar as funções fora do construtor.

É uma boa prática usar a primeira letra maiúscula nos nomes de funções construtoras.

**Função Fábrica**
Podemos resumir uma função fábrica como um gerador de objetos.

Em JavaScript, qualquer função pode retornar um objeto. Mas, quando isso acontece sem o new, é uma função de fábrica. Ou seja, quando uma função não é uma classe ou um construtor, é uma função fábrica.

```js
function Animal(nome, tipo) {
return {
nome: nome,
tipo: tipo
}
}
```

**Como criar classes**
Para criar uma classe é muito simples. Tudo o que você precisa fazer é iniciar digitando a palavra chave class e após isso definir o nome de sua classe, veja o exemplo abaixo:
 ```js
class Pessoa{


}
```

**Como definir atributos**
A forma de criar atributos de uma classe no Javascript, você deve declarar seus atributos dentro do método construtor, que é um método que toda classe deve ter, e que é o primeiro a ser executado sempre quando você cria um novo objeto daquela classe. Veja abaixo como definir o método construtor:

```js
class Pessoa{
   constructor(){
      
   }
}
```

Agora, dentro deste método você pode definir seus atributos desta forma:
```js
class Pessoa{
   constructor(){
       this.atributo1;
       this.atributo2;
   }
}
```

Em resumo, sempre quando você for declarar atributos, faça isso dentro do método construtor e utilizando a palavra chave this antes do nome do atributo, este que é o padrão do Javascript. Além disso, outra coisa que você pode fazer, é passar parâmetros para seus atributos dentro do construtor, veja abaixo:
```js
class Pessoa{
   constructor(param1, param2){
       this.atributo1 = param1;
       this.atributo2 = param2;
   }
}
```

Desta forma você pode definir valores para sua classe durante a criação de uma instância dela(veremos esse processo mais a frente). Além de atributos, uma classe também deve ter métodos que representam ações que aquela entidade pode fazer, mas como definir métodos no Javascript?

**Definindo métodos**
A definição de métodos é um processo muito simples dentro das classes do ES6, pois eles são definidos diretamente no corpo da classe quase da mesma forma de funções só que sem precisar utilizar a palavra chave function, veja o exemplo abaixo:

```js
class Pessoa{
   constructor(param1, param2){
       this.atributo1 = param1;
       this.atributo2 = param2;
   }

   metodo1(){
       console.log("Classes são legais!");
   }

   metodo2(param1){
       console.log("isso é um parametro: " + param1 + " como em funções convencionais!");
   }

   metodoDeSoma(a, b){
       return a + b;
   }
}
```

Como você viu acima, os métodos são basicamente funções que existem dentro de classes, eles funcionam exatamente da mesma forma de funções convencionais, podem receber parâmetros, printar informações, retornar dados e etc.

**Criando um objeto**
E agora que você já sabe o básico, está na hora de aprender a como criar uma instância de uma classe. Para fazer isso é muito simples, você só precisa seguir o exemplo abaixo:

```js
var bruna = new Pessoa();
var jani = new Pessoa();
```
Ou seja, primeiramente você define uma variável que vai armazenar uma instância, e após isso você passa para essa variável uma nova instância que você cria com a palavra chave new  e o nome da classe seguido de parênteses.  Além dessa forma básica de criar objetos, você ainda pode passar parâmetros para sua classe durante a instanciação, você se lembra que era possível definir parâmetros no construtor?

```js
class Pessoa{
   constructor(param1, param2){
       this.atributo1 = param1;
       this.atributo2 = param2;
   }
}
```

Então, você pode definir estes parâmetros durante a criação do objeto desta forma:

```js
var bruna = new Pessoa("Valor do param1", "Valor do param1");
var jani = new Pessoa(20, "Valor qualquer");
```

Para acessar os atributos:

```js
var bruna = new Pessoa("Valor do param1", "Valor do param1");
var jani = new Pessoa(20, "Valor qualquer");

console.log(bruna.atributo1)
console.log(bruna.atributo2)
victor.metodo1();
victor.metodo2("Oi");
console.log(bruna.metodoDeSoma(1,1));

console.log(jani.atributo1)
console.log(jani.atributo2)
lima.metodo1();
lima.metodo2("Oi");
console.log(jani.metodoDeSoma(1,1));

```
Ou seja, tanto para acessar métodos como atributos, você só precisa digitar o nome do objeto seguido de ponto e o nome do elemento. Além de todo estes passos básicos para manipular classes e objetos.

**Herança**
A herança é uma das coisas mais importantes dentro de um sistema orientado a objetos, pois ela vai permitir um boa reutilização de código e bom uso de alguns padrões de projetos importantes.  Suponhamos que eu tenha uma classe chamada Pessoa, e ela tenha os atributos nome e idade, e o método falar, como no exemplo abaixo:

```js
class Pessoa{
   constructor(nome, idade){
       this.nome = nome;
       this.idade = idade;
   }
   falar(){
       console.log("Olá mundo");
   }
}
```

Agora, digamos que eu quero ter outra classe no meu sistema que se chama Professor, ela vai ter o mesmos atributos da classe Pessoa, isso por que o professor é uma pessoa, obvio. Além desses, o professor teria outros métodos e atributos específicos deles. Contudo não seria viável eu repetir toda a estrutura da classe Pessoa na classe Professor, e para evitar essa repetição, nos podemos dizer que Professor herda todos os atributos e métodos de Pessoa, veja o exemplo abaixo de como criar uma herança entre classes no Javascript:

```js
class Professor extends Pessoa{
   constructor(nome, idade, materia){
       // Chamada do construtor da classe mãe(Pessoa)
       // o super é uma representação do construtor da classe mãe
       // E sempre deve ser a primeira linha na classe filha
       super(nome, idade);
       this.materia = materia;
   }
   darAula(){
       console.log("Agora vamos dar aula de " + this.materia);
   }
}
```