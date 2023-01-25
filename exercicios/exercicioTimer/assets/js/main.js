function relogio(){

const relogio = document.querySelector('.relogio')
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
let segundos = 0
let timer


function mostraHora(segundos) {
    let data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = mostraHora(segundos)
    }, 1000)
}

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
})


// iniciar.addEventListener('click', function (e) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio()
// })

// pausar.addEventListener('click', function (e) {
//     relogio.classList.add('pausado')
//     clearInterval(timer)
// })

// zerar.addEventListener('click', function (e) {
//     relogio.classList.remove('pausado');
//     clearInterval(timer)
//     relogio.innerHTML = '00:00:00'
//     segundos = 0
// })
}
relogio()