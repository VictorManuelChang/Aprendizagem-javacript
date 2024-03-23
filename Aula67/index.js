const numeros = [4, 13, 53, 89, 132, 12, 64, 3, 46, 61];
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);



const pessoas = [
    {nome: 'Luiz', idade: 54},
    {nome: 'Ana', idade: 12},
    {nome: 'Julia', idade: 53},
    {nome: 'Natalia', idade: 38},
    {nome: 'Fausto', idade: 90}
]
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
