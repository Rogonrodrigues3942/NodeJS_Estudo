console.log('\n***********\nNODE - Nova Instância - pt 2- 8ª aula \n*****************\n')
//função factory retorna uma novo objeto
module.exports = () => {
    return {
        valor: 1,
        increm(){
            this.valor++
        }
    } 
}