import User from "./user.js";
import Docente from "./docente.js";
import Admin from "./admin.js";

// const novoUser = new User ('Bruno', "b@dominio.com", "02/02/2002")
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Paulo',"p@dominio.com","10/08/1988")
console.log(novoAdmin.exibirInfos())


// console.log(novoAdmin.nome, novoAdmin.email) // Atrravés do método utilizado na Class (Get)

novoAdmin.nome = 'Bruno Empke'
console.log(novoAdmin.nome)
console.log(novoAdmin.sobrenome)

// Com o polimorfismo podemos herdar um método ou função de uma classe através de uma sub-classe.








