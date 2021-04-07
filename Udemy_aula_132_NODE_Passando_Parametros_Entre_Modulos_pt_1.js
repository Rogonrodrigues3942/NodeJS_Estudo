//console.log('\n***********\nNODE - PASSANDO PARÂMETROS ENTRE MÓDULOS - pt 1 - 11ª aula \n*****************\n')

module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}`)
} 