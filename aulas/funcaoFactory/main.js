//factory function sao funcoes q criam objetos

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        fala(acao){
            return `${nome} está ${acao} e com IMC de ${this.imc()}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso/(this.altura**2)
            return indice.toFixed(2)
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ') // separa o string em array pelo espaço
            this.nome = valor.shift() //tira o primeiro item do array e coloca na variavel
            this.sobrenome = valor.join(' ') //cria string colocando espaço entre valores
        }
    }

}

const p1 = criaPessoa('Julia', 'Braga', 1.6, 60)
const p2 = criaPessoa('Enrique', 'Marsa', 1.8, 120)

// console.log(p1.fala('falando') )
// console.log(p2.imc())
//usando o get antes da funcao a funcao se comporta como um atributo
//ai nao precisa mandar executar a funcao na chamada
console.log(p2.nomeCompleto)
p2.nomeCompleto = 'Lara Braga Torres'
console.log(p2.nomeCompleto)