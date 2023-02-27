class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`)
            return
        }
        this.ligado = true
        console.log(`${this.nome} foi ligado`)
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`)
            return
        }
        this.ligado = false
        console.log(`${this.nome} foi desligado`)
    }
}

// const d1 = new DispositivoEletronico('Celular')
// d1.ligar()
// d1.ligar()
// d1.desligar()
// d1.desligar()

class Smartphone extends DispositivoEletronico { //puxa toda a classe pai
    constructor(nome, cor){
        super(nome) // puxa do pai o construtor
        this.cor = cor
    }
}

const s1 = new Smartphone('IPhone', 'Branco')

console.log(s1)