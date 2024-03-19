let A = 'A';
let B = 'B';
let C = 'C';

console.log(A, B, C);

//Primeira forma
// let aux = A;
// A = B;
// B = C;
// C = aux;

[A, B, C] = [B, C, A];
console.log(A, B, C);