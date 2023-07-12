const user = {
    nome: 'Bruno',
    email: 'idalgob99@gmail.com',
    dataNascimento: '02/02/2002',
    role:'adm',
    ativo: true,
    exibiInfos: function (){
        console.log(this.nome, this.email)
    }
}

// Herança de protótipos

const exibir = function() {
    console.log(this.nome, this.email)
}

const  exibirNome = exibir.bind(user) // Aqui estamos utilizando o método bind() que vai ligar como uma ponte e vai dar contexto a função que agora tem o nome de exibirNome()

// Se utilizarmos o this sem contexto iremos ter o retorno [undefined]


exibirNome() // Função com contexto utilizando o método do this chamado bind()
exibir() // Função sem contexto

exibir.call(user) // Método call() que liga a função sem contexto ao objeto user.





