const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

//rotas da Home
route.get('/', homeController.Home)
route.post('/', homeController.TrataFormulario)

//rotas de contato
route.get('/contato', contatoController.contato)

module.exports = route
