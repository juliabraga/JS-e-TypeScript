//factory fucntion // constructor function // clases

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){ //protege a funcao de ser usada fora do objeto. a funcao vira uma propriedade do objeto
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Julia', 'Braga')
console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
    Object.freeze(this) //dessa forma nenhum objeto criado pelo contrutor Pessoa vai poder aletar os valores
}
//o new cria um objeto vazio e aponta o this pra variavel p2 por exemplo
//entao ele vai colocar no objeto vazio p2.nome = nome enviado como parametro 
//após criar o objeto é retornado sem o return na funcao
const p2 = new Pessoa('Julia', 'Lima') //cria o objeto
console.log(p2) 

const p3 = new Pessoa('Lara', 'Braga')
console.log(p3)
Object.freeze(p3) //nao vai alterar os valores do objeto mas nao da erro
//pode usar esse mesmo metodo pra array pq o JS considera o array como objeto
p2.nome = 'JuliaAlterado' //altera o valor
p3.nome = 'LaraAlterado' //nao altera o valor
console.log(p2)
console.log(p3)

const p4 = new Pessoa('Nao', 'Mexe')
p4.nome = 'Mexi' 
p4.propriedade = 'Cria'
console.log(p4)