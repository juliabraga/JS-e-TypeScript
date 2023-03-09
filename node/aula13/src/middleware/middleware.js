module.exports = (req, resp, next) => {
    if (req.body.nome) {
        console.log(`Teve um nome ${req.body.nome}`)
    }

    next()
}