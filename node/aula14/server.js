require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.connectionString)
    .then(()=>{
        app.emit('ready')
    })
    .catch(e=> console.log(e))


const routes = require('./routes')
const path = require('path')

//para tratar o POST do formulário. senão volta undefined
app.use(express.urlencoded({extended: true}))

//para definir a pasta de conteúdo estatico da pasta
app.use(express.static('./public'))

//para definir onde ficam as rotas das páginas internas
app.use(routes)

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.on('ready', ()=>{
    app.listen(3000, () => {
        console.log('Acessar em http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})

