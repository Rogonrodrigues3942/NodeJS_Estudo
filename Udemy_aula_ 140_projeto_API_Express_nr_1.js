console.log('\n********\nProjeto API com Expresse - nº 1\n************')
const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
    res.send({nome: 'notebook', preco: 123.45})
})

app.listen(porta,() => {
    console.log(`Servidor escutando na porta: ${porta}.`)
})