const mongoose = require('mongoose')
const validator = require('validator')
const CabecasSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const CabecasModel = mongoose.model('Cabecas', CabecasSchema)

class Cabecas {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }

    async register() {
        this.valid()
        if (this.errors.length > 0) return
        try {
            this.user = await CabecasModel.create(this.body)
        } catch (e) {
            console.log(e)
        }
    }
    valid() {
        //limpa dados
        this.cleanUp()

        //email precisa ser válido
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido.')
        }

        //senha entre 3 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        }

    }
    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }

}

module.exports = Cabecas