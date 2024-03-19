// function funcao(a, b = 2, c = 4){
//     console.log(a + b + c);
// }

// funcao(2, undefined, 20);

// function funcao([valor1, valor2, valor3]){
//     console.log(valor1,valor2, valor3);
// }

// funcao([1, 2, 3]);

// function conta(operador, acumulador, ...numeros) { //rest operator
//     for(let numero of numeros) {
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '*') acumulador *= numero;
//         if(operador === '/') acumulador /= numero;
//     }

//     console.log(acumulador);
// }

// conta('/', 1, 20, 30, 40, 50); //O resto dos parametros são os números a ser adicionados

const conta = function(operador, acumulador, ...numeros) { 
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};

conta('/', 1, 20, 30, 40, 50); 