//console.log('\n***********\nNODE - Sistemas de Módulos: exports - 5ª aula - módulo 1 \n*****************\n')
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)
exports = {
    nome: 'teste!'
}

console.log(module.exports)