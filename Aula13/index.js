let palavra = "O rato roeu a roupa do rei de roma.";

// console.log(palavra.replace(/r/g, '*')); //Substituir todos os 'r' da frase por '*'

// console.log(palavra.length); //O tamanho da cadeia

console.log(palavra.slice(2, 6));//Pegar a parte do texto que voce quer com slice
console.log(palavra.slice(-5, -1));//Pegar de subtraindo da cadeia

console.log(palavra.split(' ')); //Separar as palavras a partir do espaço e colocar em uma array
console.log(palavra.split('r')); //Separa no r
console.log(palavra.split(' ', 2)); //Acontece só duas vezes

console.log(palavra.toUpperCase());
console.log(palavra.toLowerCase());