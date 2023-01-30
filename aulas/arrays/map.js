//o metodo map retorna um array com a mesma quantidade de itens

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosMap = numeros.map(function (valor, indice, array) {
    //console.log(valor, indice, array)
})

//dobrar os numeros do array

const numerosDobrados = numeros.map(v => v * 2)
console.log(numerosDobrados)




const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]


//retorne apenas um string com o nome da pessoa
const nomeDasPessoas = pessoas.map(v => v.nome)
console.log(nomeDasPessoas)

//remova apenas a chave "nome" de cada objeto
// const removeChave = pessoas.map(v => delete v.nome)
const idades = pessoas.map(v => ({idade: v.idade}))
console.log(idades)

console.log('########')

//adicione uma chave id em cada objeto
const adicionaId = pessoas.map((v, i) => v.id = i+1)

console.log(pessoas)