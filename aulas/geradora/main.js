//tem q colocar o * no nome function

function* geradora1(){
    //codigo que gera o valor 1
    yield 'valor 1'
    //codigo que gera o valor 2
    yield 'valor 2'
    //codigo que gera o valor 3
    yield 'valor 3'
}

//cada vez q a funcao for chamada vai retornar um valor desses q estao no yeld
//primeira vez q chamar a funcao retorna o primeiro yeld
//segunda vez  q chamar a funcao retorna o segundo yeld
///...

const g1 = geradora1()
// console.log(g1) //retorna um gerador de objetos e nao o valor. precisa usar next
// console.log(g1.next()) // retorna um objeto { value: 'valor 1', done: false }
// //a chave value retorna o valor e a chave done se é o último yeld
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next()) // como nao tem 4 yeld retorna a chave done como true e a chave value undefined


//usando for para acessar os valores
for(valor of g1){
    console.log(valor)
}

function* geradora2(){
    let i=0
    while(true){ //esse trecho é um loop infinito e sempre vai retornar o proximo numero
        yield i
        i++
    }
}

const g2 = geradora2()
console.log(g2.next().value) //0
console.log(g2.next().value) //1
console.log(g2.next().value) //2
console.log(g2.next().value) //3
console.log(g2.next().value) //4
console.log(g2.next().value) //5


//delegando parte do gerador pra outra funcao geradora

function* geradora3(){
    yield '###'
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()
for (valor of g4){
    console.log(valor)
}

//colocando funcoes numa geradora para serem executados na ordem

function* geradora5(){
    yield function(){
        return console.log('vim do y1')
    }
    yield console.log('### y2')
    yield function(){
        return console.log('vim do y3')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value
func1()
func2
func3()