console.log('\n***********\nNODE - Arquivo Package JSON - 6ª aula \n*****************\n')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require( 'axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)
})