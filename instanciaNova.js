//exporta-se uma função e neste caso não ocorre o processo de cash

module.exports = ( )=>{
    return{
        valor: 1,
        inc() { this.valor++}
    }
}