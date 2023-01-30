const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//nao funciona pq ele transforma em string e junta
const a = a1 + a2
console.log(a, typeof a)

const a3 = a1.concat(a2, [7, 8, 9], 'Julia') //inclui a string como item do array
console.log(a3)

//usando o rest operator

const a4 = [...a1,'Julia', ...a2, [7, 8, 9]]//nesse caso ele coloca o array como um item no a4
const a5 = [...a1, ...[7, 8, 9]] //nesse caso ele "espalha" o array como itens no a5
console.log(a4)
console.log(a5)

