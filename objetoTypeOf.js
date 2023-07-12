// const user = {
//     nome: 'Jéssica',
//     email: 'jessica@gmail.com',
//     dataNascimento: '13/11/1991',
//     role:'user',
//     ativo: true,
//     exibiInfos: function (){
//         console.log(this.nome, this.email)
//     }
// }

// const admin = {
//     nome: 'Bruno',
//     email: 'idalgob99@gmail.com',
//     dataNascimento: '02/02/2002',
//     role:'adm',
//     criarCurso() {
//         console.log('Curso criado !')
//     }
// }


// Object.setPrototypeOf(admin, user) //  Objeto Pai, Objeto Filho.

// admin.criarCurso()
// admin.exibiInfos()



let user = {
    perfil: 'estudante'
   }


function User() {}
User.prototype.perfil = 'estudante'
let estudante = new User()

console.log(estudante.perfil)
