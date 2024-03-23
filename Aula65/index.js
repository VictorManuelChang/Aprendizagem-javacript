const numeros = [4, 13, 53, 89, 132, 12, 64, 3, 46, 61];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


const pessoas = [
    {nome: 'Luiz', idade: 54},
    {nome: 'Ana', idade: 12},
    {nome: 'Julia', idade: 53},
    {nome: 'Natalia', idade: 38},
    {nome: 'Fausto', idade: 90}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComIdadeGrande = pessoas.filter(obj => obj.idade > 50);
const nomesQueTerminamComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));


console.log(pessoasComNomeGrande);
console.log(pessoasComIdadeGrande);
console.log(nomesQueTerminamComA);