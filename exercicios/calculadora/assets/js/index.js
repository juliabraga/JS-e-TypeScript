function Calculadora() {
    this.display = document.querySelector('.display')
    
    this.iniciar = () => {
        this.clicaBotao(),
            this.display.addEventListener('keypress', e => {
                e.preventDefault()
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
    }

    this.mostraDisplay = (valor) => {
        this.display.value += valor
        this.display.focus()
    }

    this.limpaDisplay = () => this.display.value = ''

    this.retiraDisplay = () => this.display.value = this.display.value.slice(0, -1)

    this.realizaConta= () => {
        let conta = this.display.value
        try {
            conta = eval(conta)
            if (!conta) {
                alert('Conta inválida')
                return
            }
            this.display.value = conta
        } catch (e) {
            alert('Conta inválida')
            return
        }
    }

    this.clicaBotao = () => {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) {
                this.mostraDisplay(el.innerText)
            }
            if (el.classList.contains('btn-clear')) {
                this.limpaDisplay()
            }
            if (el.classList.contains('btn-back')) {
                this.retiraDisplay()
            }
            if (el.classList.contains('btn-equal')) {
                this.realizaConta()
            }
        })
    }
}

const calculadora = new Calculadora()
calculadora.iniciar()
