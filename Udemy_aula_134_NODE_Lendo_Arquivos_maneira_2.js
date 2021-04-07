console.log('\n***********\nNODE - Lendo arquivos usando node(file ystem) - pt 1 - 13ª aula \n*****************\n')
const conteudo = require('./arquivo.json')
console.log(conteudo.db)

const fs = require('fs')
fs.readdir(__dirname,(err, arquivos)=>{
    console.log('conteúdo da pasta...')
    console.log(arquivos)
})