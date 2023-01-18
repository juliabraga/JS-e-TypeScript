//exercicio para trocar o valor das variaveis

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

//criando uma nova variável
const temp = varA
varA = varB
varB = varC
varC = temp
console.log(varA, varB, varC);

//usando []
varA = 'A'; //B
varB = 'B'; //C
varC = 'C'; //A
console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA]; //pra usar isso precisa do ;

console.log(varA, varB, varC)