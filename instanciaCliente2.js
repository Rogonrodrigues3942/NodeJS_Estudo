const countA = require('./instanciaUnicaObj1')
const countB = require('./instanciaUnicaObj1')

const countC = require('./instanciaNovaFunc1')()
const countD = require('./instanciaNovaFunc1')()

countB.adic()
countB.adic()
countD.adic()
countD.adic()

console.log(countA.valor, countB.valor)
console.log(countC.valor, countD.valor)