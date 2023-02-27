class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('#formulario')
        this.clicar()
    }
    clicar() {
        this.formulario.addEventListener('submit', e => {
            e.preventDefault()
            const validar = this.validaCampos()
            const validarSenhas = this.validaSenhas()
            this.nome = this.formulario.querySelector('#nome')
            if(valida){
                alert(`Formulario enviado ${this.nome.value}. Obrigado`)
            }
        })
    }
    validaSenhas() {
        let valida = true
        let senha = this.formulario.querySelector('#senha')
        let repeteSenha = this.formulario.querySelector('#repeteSenha')
        if(senha.value !== repeteSenha.value){
            this.erro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.erro(repeteSenha, 'Campos senha e repetir senhaprecisam ser iguais.');
            valida = false
        } 
        return valida
    }
    validaCampos() {
        let valida = true
        for (let msgErro of this.formulario.querySelectorAll('.msg-erro')) {
            msgErro.remove();
        }
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerHTML
            if (!campo.value) {
                this.erro(campo, `Campo "${label}" não pode ser branco`)
                valida = false
            }
            if (campo.id === 'usuario') {
                if (!this.validaUsuario(campo)) valida = false
            }
            if (campo.id === 'cpf') {
                if (!this.validaCpf(campo)) valida = false
            }
        }

    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valida = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.erro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valida = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.erro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valida = false;
        }
        return valida;
    }
    erro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('msg-erro')
        campo.insertAdjacentElement('afterend', div)
    }
    validaCpf(campo) {
        const cpf = new ValidarCpf(campo.value);
        if (!cpf.valido()) {
            this.erro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }
}
const valida = new ValidaForm() 