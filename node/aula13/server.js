const express = require('express')
const app = express()
const routes = require('./routes')
const middlewareGlobal = require('./src/middleware/middleware')

//para tratar o POST do formulário. senão volta undefined
app.use(express.urlencoded({extended: true}))

//para definir a pasta de conteúdo estatico da pasta
app.use(express.static('./public'))

//todas as rotas irão passar pelo middleware global e executar a função lá
app. use(middlewareGlobal)

//para definir onde ficam as rotas das páginas internas
app.use(routes)

app.set('views', './src/views')
app.set('view engine', 'ejs')




app.listen(4000, () => {
    console.log('Acessar em http://localhost:4000')
    console.log('servidor executando na porta 4000')
})