const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

//rotas da Home
route.get('/', homeController.Home)
route.post('/', homeController.TrataFormulario)

//rotas de contato
route.get('/contato', contatoController.contato)

module.exports = route
