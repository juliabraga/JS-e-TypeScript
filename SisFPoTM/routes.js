const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const CabecasController = require('./src/controllers/CabecasController')

//rotas da Home
route.get('/', homeController.index)

//rotas do login
route.get('/cabecas/', CabecasController.index)


module.exports = route