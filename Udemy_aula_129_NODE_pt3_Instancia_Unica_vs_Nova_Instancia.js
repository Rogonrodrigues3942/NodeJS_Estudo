console.log('\n***********\nNODE - Instância Única & Nova Instância - pt 3 - 8ª aula \n*****************\n')

const contadorA = require('./Udemy_aula_129_NODE_pt1_Instancia_Unica')
const contadorB = require('./Udemy_aula_129_NODE_pt1_Instancia_Unica')

const contadorC = require('./Udemy_aula_129_NODE_pt2_Nova_Instancia')()
const contadorD = require('./Udemy_aula_129_NODE_pt2_Nova_Instancia')()

contadorA.increm()
contadorA.increm()
console.log(contadorB.valor, contadorA.valor)
/*O contador A e B tem a importação do mesmo arquivo, node faz o cache deste arquivo em comum
e armazena a informação no arquivo de origem.*/

contadorC.increm()
contadorC.increm()
console.log(contadorC.valor, contadorD.valor)
/*No caso dos contadores C e D, não há cacheamento porque são criados objetos diferentes na chamadas dos
contadores, foram criadas atyraves da função factory().*/