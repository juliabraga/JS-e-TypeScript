class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
//com a classe os métodos ficam no prototype e nao no objeto
    falar(){
        console.log(`${this.nome} está falando.`)
    }

    comer(){
        console.log(`${this.nome} está comendo.`)
    }

    beber(){
        console.log(`${this.nome} está bebendo.`)
    }
}

const p1 = new Pessoa('Julia', 'Braga')
console.log(p1)
p1.falar()
p1.comer()
p1.beber()