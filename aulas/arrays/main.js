const nomes = ['Julia', 'Enrique', 'Hudar', 'Lara']
const removUltimo = nomes.pop() //remove o último e pode ser colocado em outra constante ou não
const removPrimeiro = nomes.shift() //remove o primeiro e pode ser colocado em outra constante ou não
//como remove altera os indices

delete nomes[1] //remove o valor deixando o indice vazio

nomes.push('braga', 'lima') // adiciona o valor no final
nomes.unshift('torres') //adiciona no inicio, mexendo nos indices

const novaArray = nomes.slice(3, 5) //copia parte do array definido pelos indices
//nao mexe no array original
const novaArray2 = nomes.slice(0, -2) //todos os valores retirando 2 do final

console.log(nomes)
console.log(removPrimeiro)
console.log(removUltimo)
console.log(novaArray)
console.log(novaArray2)


//separa String em um array usando um caracter como referencia

const nome = 'Julia Braga Barbosa Lima'
const nomeArray = nome.split(' ') //cria um array separando a String onde tem espaço
const nomeCompleto = nomeArray.join(' ') //transforma o array num String colocando espaço entre os valores
console.log(nomeArray)
console.log(nomeCompleto)
