exports.Home = (req, res, next) => {
    req.session.usuario = { nome: 'Julia', logado: true }
    res.render('index', {
        titulo: 'Este é o título',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
    return
}

exports.TrataFormulario = (req, res) => {
    res.send(req.body)
    return
}