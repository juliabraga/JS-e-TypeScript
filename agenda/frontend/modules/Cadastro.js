const validator = require('validator')

export default class Cadastro {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.emailError = '';
        this.passError = ''
    }

    init() {
        this.events()
    }

    events() {
        if (!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]')
        const passInput = el.querySelector('input[name="password"]')

        //email precisa ser válido
        if (!validator.isEmail(emailInput.value)) {
            this.emailError = ('E-mail está inválido.')
        }

        //senha entre 3 e 50 caracteres
        if (passInput.value.length < 3 || passInput.value.length > 50) {
            this.passError = ('A senha precisa ter entre 3 e 50 caracteres')
        }
        if (this.emailError || this.passError) {
            this.message(emailInput, passInput)
            return
        }
        el.submit(el)
    }

    message(email, pass) {
        if (email) {
            const divErrorEmail = document.createElement('div')
            email.after(divErrorEmail, this.emailError)
        }
        if (pass) {
            const divErrorPass = document.createElement('div')
            pass.after(divErrorPass, this.passError)
        }

        console.log('cadastro', this.emailError, this.passError, email, pass)
    }

}

