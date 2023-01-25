// try {
//     console.log(naoExisto) //variavel nao declarada
// } catch (e){
//     console.log('texto quando dá erro')
//     console.log(e)
// }

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('x e y precisam ser numeros')
    }

    return x + y
}
try {
console.log(soma(1, 2))
console.log(soma('1', 2))
} catch (e){
    // console.log(e)
    console.log('Aviso de erro pro usuário')
}

try {
//é executado quando nao há erros
}catch(e){
//é executado quando há erros
}finally{
//é executado sempre. é opcional
}