function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    })
}

function funcaoDoInterval(){
console.log(mostraHora())
}

//coloca a funcao sem executar ela, sem o parenteses, e o tempo em milisegundos
// setInterval(funcaoDoInterval, 1000)

//coloca a funcao anomima pra executar
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

//criando um setTimeOut para executar uma vez no período definido para parar a funcao

setTimeout(function(){
    clearInterval(timer)
}, 3000)

setTimeout(function(){
    console.log('Olá mundo daqui a 5 segundos')
}, 5000)