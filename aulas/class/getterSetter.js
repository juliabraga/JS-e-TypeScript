const _velocidade = Symbol()

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0 //dessa foram vira uma propriedade privada
    }

    set velocidade(valor) { //forma de alterar a propriedade privada por fora com controle
        if (typeof valor !== 'number') return
        if (valor > 100 | valor < 0) return
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade]
    }

    acelarar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }
    freiar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

for (let i = 0; i <= 200; i++) {
    c1.acelarar()
}

c1.velocidade = 2000 //nao consegue alterar pq tá maior q o set
c1.velocidade = 50 // altera
console.log(c1.velocidade)


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }
    set nomeCompleto(valor){
        valor = valor.split(' ')
        // console.log(valor)
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}

p1 = new Pessoa('Julia', 'Braga')
p1.nomeCompleto  = 'Enrique Torres Junior'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto) //nao preciso usar o parenteses pq é o setter q simula um metodo como propriedade