const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input name="nome" type="text">
    <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Formulario recebido')
})

app.listen(3000, () => {
    console.log('Acessar em http://localhost:3000')
    console.log('servidor executando na porta 3000')
})