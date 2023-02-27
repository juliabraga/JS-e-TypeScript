//070.987.720-03

class ValidarCpf {
    constructor(cpfenviado) {
        Object.defineProperty(this, 'cpfenviado', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfenviado.replace(/\D+/g, '')
        })

    }

    isSequence() {
        const sequence = this.cpfenviado[0].repeat(this.cpfenviado.length)
        return this.cpfenviado === sequence
    }

    confirmaCPf() {
        let cpfParcial = this.cpfenviado.slice(0, -2)
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
        const cpfGerado = cpfParcial + digito1 + digito2
        return cpfGerado === this.cpfenviado
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfParcial.length + 1
        const total = cpfArray.reduce((ac, v) => {
            ac += regressivo * Number(v)
            regressivo--
            return ac
        }, 0)
        const digito = 11 - (total % 11)
        return digito > 9 ? 0 : digito
    }

    valido() {
        if (this.cpfenviado.length != 11) return console.log('Numero de digitos errado')
        if (typeof this.cpfenviado === 'undefined') return console.log('CPF vazio')
        if (this.isSequence()) return console.log('Sequencia')
        if (this.confirmaCPf(this.cpfenviado)) {
            console.log('CPF válido')
        } else {
            console.log('CPF inválido')
        }
    }
}

const cpf = new ValidarCpf('070.987.720-03')
cpf.valido()
