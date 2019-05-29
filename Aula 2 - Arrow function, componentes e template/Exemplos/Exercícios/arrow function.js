// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
    let obj2 = {nome: usuario.nome, idade: usuario.idade}
  return usuario.idade;
}

mostraIdade(usuario);

const mostraIdade = (usuario) => usuario.idade;

mostraIdade(usuario);

// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

const mostraUsuario = () => {
    return 'ooooi';
  }

  mostraUsuario('Diego', 13);