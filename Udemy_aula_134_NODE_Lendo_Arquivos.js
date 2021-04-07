console.log('\n***********\nNODE - Lendo arquivos usando node(file ystem) - pt 1 - 13ª aula \n*****************\n')

const fs = require('fs') //fs é um objeto global do node.

const caminho = __dirname + './arquivo.json'

/*Processo de leitura assincrono.*/
fs.readFile(caminho, 'utf-8',(err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})


/*Processo de leitura sincrono.*/
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log