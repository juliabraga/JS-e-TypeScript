/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é 25.9259259
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const alturaEmM = 1.80
let imc // imc = peso / (altura * altura)
let anoNascimento
let texto

imc = peso / (alturaEmM*alturaEmM)
anoNascimento = 2022 - idade

//usando as variáveis e constantes
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
//usando tamplate string
console.log(`tem ${alturaEmM} de altura e seu IMC é ${imc}`)
//usando o + não fica o espaço
console.log(nome + ' ' + 'nasceu em ', anoNascimento + '.')