exports.Home = (req, res, next) => {
    res.render('index')
    next()
}

exports.TrataFormulario = (req, res) => {
    res.send(req.body)
}