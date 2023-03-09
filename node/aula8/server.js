const express = require('express')
const app = express()

//para tratar o POST do formulário. senão volta undefined
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input name="nome" type="text">
    Escola: <input name="escola" type="text">
    <button>Enviar</button>
    </form>
    `)
})

app.get('/testes/:iduser?/:name?', (req, res) => {
    //testes/1234/julia
    console.log(req.params)
    //testes/?chave1=valor1&chave2=valor2
    console.log(req.query)
    res.send(`Oi ${req.params.iduser} ${req.params.name} \n ${req.query}`)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Formulario recebido com ${req.body.nome} ${req.body.escola}`)
})

app.listen(3000, () => {
    console.log('Acessar em http://localhost:3000')
    console.log('servidor executando na porta 3000')
})