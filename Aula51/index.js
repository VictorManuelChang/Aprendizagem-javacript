function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quaduplica = criaMultiplicador(4);

console.log(duplica(34));
console.log(triplica(34));
console.log(quaduplica(34));