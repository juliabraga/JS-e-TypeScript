const data = new Date()
const diaSemana = data.getDay()
let diaSemanaTexto = ''
const diaMes = data.getDate()
const mes = data.getMonth()
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 
'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let mesTexto = ''
const ano = data.getFullYear()
const hora = colocaZero(data.getHours())
const minuto = colocaZero(data.getMinutes())

function colocaZero(num){
    return num < 10 ? `0${num}` : num 
}

switch (mes) {
    case 0: mesTexto = meses[0]
        break;
    case 1: mesTexto = meses[1]
        break;
    case 2: mesTexto = meses[2]
        break;
    case 3: mesTexto = meses[3]
        break;
    case 4: mesTexto = meses[4]
        break;
    case 5: mesTexto = meses[5]
        break;
    case 6: mesTexto = meses[6]
        break;
    case 7: mesTexto = meses[7]
        break;
    case 8: mesTexto = meses[8]
        break;
    case 9: mesTexto = meses[9]
        break;
    case 10: mesTexto = meses[10]
        break;
    case 11: mesTexto = meses[11]
        break;
    default:
        break;
}


switch (diaSemana) {
    case 0: diaSemanaTexto = 'Domingo'
        break;
    case 1: diaSemanaTexto = 'Segunda-feira'
        break;
    case 2: diaSemanaTexto = 'Terça-feira'
        break;
    case 3: diaSemanaTexto = 'Quarta-feira'
        break;
    case 4: diaSemanaTexto = 'Quinta-feira'
        break;
    case 5: diaSemanaTexto = 'Sexta-feira'
        break;
    case 6: diaSemanaTexto = 'Sábado'
        break;
    default:
        break;
}

const texto = `<p>${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano} ${hora}:${minuto}</p>`
const resultado = document.querySelector('.container h1')
resultado.innerHTML = texto
