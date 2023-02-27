function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log('Não é possível sacar esse valor')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`O saldo na conta: ${this.agencia}/${this.conta} é de R$${this.saldo.toFixed(2)}`)
}

function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

ContaPoupanca.prototype.sacar = function (valor) {
    if (this.saldo + this.limite < valor) {
        console.log('Não é possível sacar esse valor')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    if (this.saldo < 0){
        console.log('Você está usando seu limite')
    }
        this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const cp = new ContaPoupanca('183-5', 693, 100)
// julia.verSaldo()
// julia.depositar(25)
// julia.sacar(225)

// cc.verSaldo()
// cc.depositar(50)
// cc.sacar(25)
// cc.sacar(200)
// cc.depositar(100)
// cc.sacar(50)
// cc.sacar(300)

cp.verSaldo()
cp.depositar(100)
cp.sacar(300)
