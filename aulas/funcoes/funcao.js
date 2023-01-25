function soma(a, b) {
    return a + b
}
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}
const pessoa1 = criaPessoa('Julia', 'Braga')
const pessoa2 = {
    nome: 'Julia',
    sobrenome: 'Braga'
}


console.log(pessoa1)
console.log(pessoa2)


function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const olaMundo = falaFrase('Olá') 
//olaMundo é uma função pois na função falaFrase é retornada a função falaResto
console.log(olaMundo('mundo'))


function multiplica(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = multiplica(2)
console.log(duplica(3))
const triplica = multiplica(3)
console.log(triplica(3))