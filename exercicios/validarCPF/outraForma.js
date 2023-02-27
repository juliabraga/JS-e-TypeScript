function ValidaCPF(cpfenviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfenviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCPF = cpfParcial + digito1 + digito2
    return this.cpfLimpo === novoCPF
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
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

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return this.cpfLimpo === sequencia
}

const cpf = new ValidaCPF('83921311349')

if(cpf.valida()){
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
