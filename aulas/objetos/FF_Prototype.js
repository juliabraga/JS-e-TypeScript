//criar uma FactoryFunction com os metodos dentro do objeto
//dessa forma cada pessoa criada vai ter os metodos e isso é ruim pra perfomance
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falar() {
            console.log(`${this.nome} está falando`)
        },
        comer() {
            console.log(`${this.nome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} está bebendo`)
        }
    }
}
*/

//Criando a FactoryFunction dessa forma os metodos ficam no prototype
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}
const pessoaPrototype = { ...falar, ...comer }
//tb funciona com o assign
const pessoaPrototype2 = Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype2, {
        nome: {
            value: nome,
            enumerable: true,
            writable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true
        }
    })
}

const p1 = criaPessoa('Julia', 'Braga')
p1.falar()
p1.comer()