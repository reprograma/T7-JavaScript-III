class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    console.log(this.admin);
    //  console.log(this.admin == true ? 'A pessoa é administrador' : 'Usuario comum');

    if (this.admin == true) {
      console.log('A pessoa é administrador');
    }
    else {
      console.log('Usuario comum');
    }
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
  

}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true