const h1 = document.querySelector('.container h1')
const data = new Date()

function mesTexto(numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
return meses[numeroMes]
}

function semanaTexto(numeroSemana){
    const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    return dias[numeroSemana]
}

function colocaZero (num){
    return num <10 ? `0${num}` : num
}

function criaData(data){
    const numeroSemana = data.getDay()
    const numeroMes = data.getMonth()
    const nomeSemana = semanaTexto(numeroSemana)
    const nomeMes = mesTexto(numeroMes)
      
    return (`${nomeSemana}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)
}
h1.innerHTML = criaData(data)