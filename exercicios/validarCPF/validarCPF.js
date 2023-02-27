//cpf 070.987.720-03

const cpf = prompt('Digite o CPF').replace(/\D+/g, '')
const multiplica1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
const multiplica2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
const cpfArray = Array.from(cpf).map(v => Number(v))
let soma = []
let texto = 'CPF inválido'

function isSequencia(cpf) {
    const sequencia = cpf[0].repeat(cpf.length)
     return sequencia === cpf
}


function calculaDigito(multiplica) {
    if (cpfArray.length !== 11) {
        return false
    } 
    if (isSequencia(cpf)){
        return false
    }
    else {
        for (let i = 0; i < multiplica.length; i++) {
            soma[i] = cpfArray[i] * multiplica[i]
        }
        let digito = 11 - (soma.reduce((a, v) => a += v, 0) % 11)
        return digito > 9 ? 0 : digito
    }
}

const digito1 = calculaDigito(multiplica1)
if (digito1 === cpfArray[9]) {
    const digito2 = calculaDigito(multiplica2)
    if (digito2 === cpfArray[10]) {
        texto = 'CPF validado'
    }
}
const resultado = document.querySelector('#resultado h1')
resultado.innerHTML = texto