exports.Home = (req, res, next) => {
    req.session.usuario = {nome: 'Julia', logado: true}
    res.render('index')
    next()
}

exports.TrataFormulario = (req, res) => {
    res.send(req.body)
}