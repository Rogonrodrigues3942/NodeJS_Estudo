console.log('\n***********\nNODE - Escrevendo arquivos usando node(file ystem) - 13ª aula \n*****************\n')
const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname +'/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo!')})