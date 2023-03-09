const nome = 'Julia'
const sobrenome = 'Braga'

const fala = () => {
    console.log(nome, sobrenome)
}

exports.nome = nome
this.sobrenome = sobrenome
exports.fala = fala
// console.log(module.exports)

class Pessoa{
    constructor(nome1){
        this.nome1 = nome1
    }
}

exports.Pessoa = Pessoa