require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.connectionString)
    .then(() => {
        app.emit('ready')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStorage = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')

//para tratar o POST do formulário. senão volta undefined
app.use(express.urlencoded({ extended: true }))

//para definir a pasta de conteúdo estatico da pasta
app.use(express.static('./public'))

//para definir as opções de armazenamento da sessão do usuário
const sessionOption = session({
    secret: 'qualquercoisa 554813217 aleatoria qiugsdfbue()*&¨6',
    store: MongoStorage.create({ mongoUrl: process.env.connectionString }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOption)
app.use(flash())

app.set('views', './src/views')
app.set('view engine', 'ejs')

//para definir onde ficam as rotas das páginas internas
app.use(routes)

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Acessar em http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})

