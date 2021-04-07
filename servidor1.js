/*Aula 140- Projeto: API com Express #01 - 1ª revisão*/
const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')  //solicitando acesso ao arquivo bancoDeDados
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produto2',(req, res, prox) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos',(req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    
    res.send(produto) //Coverte para JSON
})

app.listen(porta,() =>{
    console.log(`Servidor executando na porta: ${porta}.`)
})