console.log('\n***********\nNODE - Arquivo Package JSON - 7ª aula \n*****************\n')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require( 'axios')

/*Criar 3 funções filtrando informações: I - funcionários chineses, II - mulheres e III - < salário*/

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)

    //Mulher chinesa com menor salário
const func = funcionarios
.filter(chineses)
.filter(mulheres)
.reduce(menorSalario)

console.log(func)

})

