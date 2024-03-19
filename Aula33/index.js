const pessoa = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasill',
        numero: 320
    }
}

// const {nome, sobrenome} = pessoa;
// console.log(nome, sobrenome);

// const {endereço: {rua, numero}, endereço} = pessoa; //Separando o objeto endereço em rua e numero
// console.log(rua, numero, endereço);

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);