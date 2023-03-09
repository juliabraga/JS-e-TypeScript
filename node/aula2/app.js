const path = require('path')
const mutiplica = require('./mod')

console.log(mutiplica(2, 4))

console.log(__filename)
console.log(__dirname)
console.log(path.resolve(__dirname))
console.log(path.resolve(__dirname, '..', 'aula1', 'mod1.js'))