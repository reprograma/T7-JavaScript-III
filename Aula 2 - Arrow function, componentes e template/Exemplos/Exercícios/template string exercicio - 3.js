
let usuarios = [
  {
    nome: "Bruna",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriela",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  },
  {
    nome: "Julia",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function exibeHabilidades(usuarios) {  
    for (elemento of usuarios) {
      console.log(
        //`A ${elemento.nome} possui as habilidades: ${elemento.habilidades.toString()}`
        `A ${elemento.nome} possui as habilidades: 
        ${elemento.habilidades.join(" - ")}`
      );
    }
  }

exibeHabilidades(usuarios);

