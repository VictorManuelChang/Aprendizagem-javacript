/*
Primitivos(imutáveis) - string, number, boolean, undefined, null

Referência(mutável) - array, object, function
*/

// let a = [1, 2, 3];
// let b = a; //É como um ponteiro, os dois array estão apontando para o mesmo valor, ou seja passados por referência

// console.log(a, b);

// a.push(4);

// console.log(a, b);

//Caso você não queira passar por referência e quer só copiar um array ou objeto, use '...'
let a = [1, 2, 3];
let b = [...a]; 

console.log(a, b);

a.push(4);

console.log(a, b);