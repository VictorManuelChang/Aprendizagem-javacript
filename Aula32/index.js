// ... rest(pra pegar o resto), ... spread

const { log } = require("console");

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const  [primeiroNumero, segundoNumeoo, terceiroNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumeoo, terceiroNumero);
// console.log(resto);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const  [um, ,tres, , cinco, , sete, ...resto] = numeros;
// console.log(um, tres, cinco);
// console.log(resto);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;

console,log(lista1[2]);