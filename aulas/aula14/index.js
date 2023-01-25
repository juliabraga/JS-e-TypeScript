let umaString = 'um "texto"'; //as duplas dentro de aspas simples
let outraString = "outro 'texto'"; //aspas simples dentro de aspas duplas
let stringFeia = "um texto \"feio\""; //ignora a aspas dupla colocando a barra invertida antes dela
let stringComBarra = "um texto com uma \\barra"; //para notações de escape tem
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation

console.log(umaString)
console.log(outraString)
console.log(stringFeia)
console.log(stringComBarra)

//cada caracter da string tem um indice iniciando pelo zero
console.log(umaString[6])//acessa a letra do indice 6 do texto
console.log(umaString[20])//retorna undefined pq nao tem 20 caracteres no texto
console.log(umaString.charAt(6)) //acessa a letra do indice 6 do texto
console.log(umaString.charAt(20)) //nao retorna nada, nem undefined
console.log(umaString.indexOf('texto')) //retorna o indice onde inicia o texto
console.log(umaString.indexOf('t')) // retorna o indice da primeira letra encontrada
console.log(umaString.lastIndexOf('t')) //retorna o indice da última letra encontrada
console.log(umaString.indexOf('T')) //retorna -1 quando não encontra a letra
console.log(umaString.indexOf('x', 5)) //retorna o indice onde esta a letra a partir do indice 5
console.log(umaString.replace('um', 'Outro'))
const stringtexto = 'o rato roeu a roupa do rei de roma.'
console.log(stringtexto.replace(/r/g, '#')) //expressao regular. ESTUDAR
console.log(stringtexto.length) //retorna o tamanho da string
console.log(stringtexto.slice(2, 6)) //nao considera a letra do indice 6
console.log(stringtexto.slice(-5, -1)) // inicia em (total de caracter -5) até (-1
console.log(stringtexto.split(' ')) //divide a string numa array usando o espaço como referência
console.log(stringtexto.toUpperCase())