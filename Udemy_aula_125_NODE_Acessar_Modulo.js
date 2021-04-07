console.log('\n**********\n4ª aula - NODE - Acessando Módulos de Terceiros em diretorio\n**************')

console.log('\nAcessando moduloa')
const moduloA3 = require('../../moduloA123')
console.log(moduloA3.ola)
console.log(moduloA3.bemVindo)

console.log('\nAcessando moduloB')
const moduloB3 = require('../../moduloB123')
console.log(moduloB3)