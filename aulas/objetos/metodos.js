/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, prop)
*/
/*
Object.keys
Object.freeze
Object.defineProperty
Object.defineProperties
*/

const produto = {
    nome: 'Caneta',
    preco: 1.8
}

const outroProduto = produto
produto.nome = 'Caneta' //tb altera o outroProduto

const produtoModificado = {
    ...produto,
    material: 'Ferro'
}
produto.preco = 2.5 //nao altera o produtoModificado
console.log(produto)
console.log(outroProduto)
console.log(produtoModificado)

//assign (mesma coisa de usar o rest operator)
const produtoAssign = Object.assign({}, produto, {material: 'porcelana'}) 
console.log(produtoAssign)

//values
const roupa = {
    tamanho: 'GG',
    categoria: 'Infantil',
    cor: 'Branca'
}
console.log(Object.values(roupa)) //retorna um array
console.log(Object.entries(roupa))