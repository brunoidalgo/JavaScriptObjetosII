export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, sobrenome,  email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    #montaObjUser() {
        return({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    get nome() {
        return `${this.#nome} ${this.#sobrenome}`
      }

    // get nome () {
    //     return this.#nome
    // }

    get sobrenome() {
        return this.#sobrenome
      }

    get email() {
        return this.#email
    }


    set nome(novoNome){
        if (novoNome === "") {
            throw new Error('Formato não válido')
        }

        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
        
    }

    exibirInfosPrivadas () {
        const objUser = this.#montaObjUser()
        return `${objUser.nome }, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }

    exibirInfos() {
        return `${this.#nome }, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`
    }
}