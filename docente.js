import User from './user.js'

export default class Docente extends User {  // extender a classe de outra.
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado(a) no curso ${curso}`
    }
}