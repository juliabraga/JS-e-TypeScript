const path = require('path')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const nomeArquivo = 'teste.json'
// const pessoas = [
//     {nome: 'Julia'},
//     {nome: 'Enrique'},
//     {nome: 'Hudar'},
//     {nome: 'Lara'}
// ]
// const json = JSON.stringify(pessoas, '', 2)
const caminhoArquivo = path.resolve(__dirname, nomeArquivo)

// escreve(caminhoArquivo, json)

async function leArquivo(caminho){
    const dados = await ler(caminho)
    retornaDados(dados)
}

function retornaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(v => console.log(v.nome))
}

leArquivo(caminhoArquivo)
