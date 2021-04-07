console.log('\n***********\nNODE - Processo: Entrada e Saída  - 24ª aula \n*****************\n')
const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo){
    process.stdout.write('Fala anônimo!!\n')
}
else{
    process.stdout.write('Infomre o seu nome: ')
    process.stdin.on('data', data =>{

        const nome = data.toString().replace('\n',"")
        process.stdout.write(`  Fala ${nome}!!\n`)
        process.exit()
    })
}