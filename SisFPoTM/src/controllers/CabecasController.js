const { async } = require('regenerator-runtime')
const Cabecas = require('../models/CabecasModel')

exports.index = (req, res) => {
    res.render('cabecas')
}

exports.register = async (req, res) => {
    const cabecas = new Login(req.body)
    await cabecas.register()
    res.send(cabecas.errors)
}