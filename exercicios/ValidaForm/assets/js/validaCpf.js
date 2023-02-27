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
    }
    confirmaCPf() {
        let cpfParcial = this.cpfenviado.slice(0, -2)
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
        this.cpfGerado = cpfParcial + digito1 + digito2
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
        if (this.cpfenviado.length != 11) return false
        if (typeof this.cpfenviado !== 'string') return false
        if (this.isSequence()) return false
        this.confirmaCPf()
        return this.cpfGerado === this.cpfenviado
    }
}
