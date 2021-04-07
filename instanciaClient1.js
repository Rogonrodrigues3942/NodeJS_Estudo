const contA = require('./instnciaUnicaObj')
const contB = require('./instnciaUnicaObj')

const contC = require('./instanciaNovaFunc')()
const contD = require('./instanciaNovaFunc')()

contA.incr()
contA.incr()
console.log(contA.valor, contB.valor)

contC.incr()
contC.incr()
console.log(contC.valor, contD.valor)