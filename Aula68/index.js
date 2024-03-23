const numeros = [4, 13, 53, 89, 132, 12, 64, 3, 46, 61];

const pares = numeros.filter(valor => valor % 2 === 0);
const dobro = pares.map(valor => valor * 2);

const total = dobro.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);
