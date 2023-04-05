const HomeModel = require('../models/HomeModel')

//cria um dado no banco de dados
HomeModel.create({
    titulo: 'Titulo teste',
    descricao: 'Criando outro dado no MongoDB usando o mongoose'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

//traz todos que existem no banco de dados
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.Home = (req, res, next) => {
    res.render('index')
    next()
}

exports.TrataFormulario = (req, res) => {
    res.send(req.body)
}