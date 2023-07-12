// Herança de classes em JavaScript utilizando o ECMASCRIPT6 com Modules.


import  User  from "./user.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas) {
        return `Curso de ${nomeCurso} criado com ${vagas} vagas` 
    }
}