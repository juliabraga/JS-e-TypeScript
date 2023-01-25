//todas funcoes sem parametros

function falaOi() {
    console.log('Olá')
}
falaOi() // pode ser colocado antes ou depois pq a funcao foi declarada do modo padrão

const souUmDado = function () {
    console.log('Eu sou uma função e um dado')
}
souUmDado() //uma constante sendo usada como função

const funcaoArrow = () => console.log('Sou uma arrow function')
funcaoArrow() //arrow function é mais reduzido o codigo para uma unica ação

const obj = {
    falar() {
        console.log('Estou falando de um objeto')
    }
}

obj.falar() //funcao como um elemento de um objeto
