const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware (req, res, next){
    req.session = {nome: 'Julia'}
    console.log()
    console.log('Passei nesse middleware')
    console.log()
    next()
}

//após responder ao usuário ainda posso executar alguma função
function aindaPorAqui (req, res, next){
    console.log(`No começo foi definido o nome ${req.session.nome}`)
}

//rotas da Home
route.get('/', meuMiddleware, homeController.Home, aindaPorAqui)
route.post('/', homeController.TrataFormulario)

//rotas de contato
route.get('/contato', contatoController.contato)

module.exports = route
