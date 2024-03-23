const numeros = [4, 13, 53, 89, 132, 12, 64, 3, 46, 61];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);





const pessoas = [
    {nome: 'Luiz', idade: 54},
    {nome: 'Ana', idade: 12},
    {nome: 'Julia', idade: 53},
    {nome: 'Natalia', idade: 38},
    {nome: 'Fausto', idade: 90}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));

const comIds = pessoas.map((obj, indice) => {
    // obj.id = (indice + 1 ) * 1000; Está modificando diretamente o objeto original
    const newObj = {...obj};
    newObj.id = indice + 1 * 1000;
    return obj;
})

console.log(nomes);
console.log(idades);
console.log(comIds);

