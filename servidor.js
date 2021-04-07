/*Aula 140- Projeto: API com Express #01*/
console.log('\n********\nProjeto API com Expresse - nº 1 - 1ª revisão\n************')
const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
    res.send({nome: 'notebook', preco: 123.45})    //Converter o objeto em JSON
})

app.listen(porta,() => {
    console.log(`Servidor escutando na porta: ${porta}.`)
})