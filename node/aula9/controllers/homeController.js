exports.Home = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input name="nome" type="text">
    Escola: <input name="escola" type="text">
    <button>Enviar</button>
    </form>
    `)
}

exports.TrataFormulario = (req, res) => {
    res.send(`Formulário enviado com ${req.body.nome}, estudante de ${req.body.escola}`)
}