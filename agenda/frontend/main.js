import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Login from './modules/Login'
import Cadastro from './modules/Cadastro'

const login = new Login('.form-login')
const cadastro = new Cadastro('.form-cadastro')

login.init()
cadastro.init()
// import './assets/css/style.css';