exports.Home = (req, res) => {
    res.render('index')
}

exports.TrataFormulario = (req, res) => {
    res.send(`Formulário enviado com ${req.body.nome}, estudante de ${req.body.escola}`)
}