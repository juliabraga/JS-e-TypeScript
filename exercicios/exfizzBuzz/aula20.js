/* Escreva uma funcao que recebe um numero e retorne o seguinte
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero nao é divisivel por 3 e 5 = retorna o proprio numero
Checar se o numero é realmente um numero = retorna o arqgumento
Use a funcao com numero de 0 a 100*/

function FizzBuzz (num){
    if (typeof num !== 'number' ) return num
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 5 === 0) return 'Buzz'
    if (num % 3 === 0) return 'Fizz'
    else return num
}

for(let i = 0; i<=100; i++){
    console.log(i, FizzBuzz(i))
}