const frutas = ['Maça', 'Uva', 'Morango', 'GOiaba']
console.log('for classico')
for(i = 0;i<frutas.length;i++){
    console.log(frutas[i])
}
console.log('For in')
for (i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome:'Julia',
    sobrenome:'Braga',
    idade: 43
}
console.log(pessoa.nome)
console.log(pessoa['nome'])

for (chaves in pessoa){
    console.log(chaves)
}

for (chave in pessoa){ //retorna o indice
    console.log(chave, pessoa[chave])
}
console.log('For of')
for (chave of frutas){ //retorna o valor de cada indice. Nao funciona com objetos
    console.log(chave)
}
console.log('forEach')
frutas.forEach(function(valor, indice, array){
    console.log(valor)
    console.log(indice)
    console.log(array)
})