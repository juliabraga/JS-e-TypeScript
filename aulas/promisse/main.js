function rand(min = 1000, max = 3000) {
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

/*
espera('Frase 1', rand())
espera('Frase 2', rand())
espera('Frase 3', rand())
*/

//Usando callback
function espera2(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if (cb) cb()
    }, tempo)
}
//dessa forma a frase 2 só será chamada depois da frase1 sempre
/*
espera2('Frase 1', rand(), function () {
    espera2('Frase 2', rand(), function () {
        espera2('Frase 3', rand())
    })
})
*/

//usando promisse
function espera3(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Dado inválido')
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

espera3('Frase 1', rand())
    .then(resposta => {
        console.log(resposta)
        return espera3('Frase 2', rand())
    })
    .then(resposta => {
        console.log(resposta)
        return espera3(222, rand())
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(()=>{
        console.log('Texto final')
    })
    .catch((e)=>{
        console.log(e)
    })
