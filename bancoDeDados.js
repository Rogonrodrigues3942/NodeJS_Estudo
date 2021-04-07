/*Aula 140- Projeto: API com Express #02*/
const sequence = {
    _id: 1,
    get id(){return this._id++}
}

const produtos = {} // armazena os id de produtos

function salvarProdutos(produto){
    if(!produtos.id) produtos.id = sequence.id  //adiciona id para produtos que não tem
    produtos[produtos.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProdutos, getProduto, getProdutos}  // exportando as 3 funções.