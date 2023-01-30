//criando a funcao dessa forma ela é executada imediatamente
//coloca a funcao entre parenteses e coloca parenteses depois dela
//dessa forma a funcao é anonima e não usa nada do Globa

(function(){

//aqui dentro pode ser criado o codigo normalmente
    const nome = 'Julia'
    console.log(nome)

    function falaOi(){
        console.log(`Oi ${nome}`)
    }
    falaOi()

})()

//posso criar outra constante como mesmo nome aqui q nao interfere
const nome = 'Outra coisa'