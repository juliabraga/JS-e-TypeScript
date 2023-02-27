const pessoas = [
    { id: 3, nome: 'Julia' },
    { id: 2, nome: 'Enrique' },
    { id: 1, nome: 'Hudar' },
]

//dessa forma altera a ordem do obejto original para a ordem numerica crescente dos IDs
//além dissso o ID ficou como string
/* const novasPessoas = {}
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas[id] = { ...pessoa }
} 
console.log(novasPessoas)
{
  '1': { id: 1, nome: 'Hudar' },
  '2': { id: 2, nome: 'Enrique' },
  '3': { id: 3, nome: 'Julia' }
}
*/

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa })
}

console.log(novasPessoas)
/*
Map(3) {
  3 => { id: 3, nome: 'Julia' },
  2 => { id: 2, nome: 'Enrique' },
  1 => { id: 1, nome: 'Hudar' }
}
*/

console.log(novasPessoas.get(3))

for( [ident, {id, nome}] of novasPessoas){
    console.log(id)
    console.log(ident)
    console.log(nome)
}

novasPessoas.delete(1)
console.log(novasPessoas)