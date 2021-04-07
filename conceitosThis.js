//Compreendendo os conceitos de utilização do this

console.log(this === global)
console.log(this === exports)
console.log(this === module.exports)

function logThis(){
    console.log('\nDentro de uma função!!')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()