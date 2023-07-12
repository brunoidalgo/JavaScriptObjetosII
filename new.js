// function User(nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibitInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }


// const newUser = new User ('Bruno', 'idalgob99@gmail.com')
// console.log(newUser.exibitInfos())

// function Admin (role) {
//     User.call(this, 'Bruno', 'idalgob99@gmail.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibitInfos())
// console.log(novoUser.role)




function criaUser(nome, email) {
    return {
      nome,
      email,
      exibeInfos() {
        return `${nome}, ${email}`
      }
    }
   }

const newUser = criaUser('Bruno', 'b@gmail.com')
const newUser2 = criaUser('Jéssica', 'j@gmail.com')
console.log(newUser)
console.log(newUser.exibeInfos())

console.log(newUser2)
console.log(newUser2.exibeInfos())


// const novoUser = Object.create(user)
// novoUser.init('Bruno', 'Idalgob99@gmail.com')
// console.log(novoUser.exibirInfos())
// console.log(novoUser)
// console.log(user.isPrototypeOf(novoUser))