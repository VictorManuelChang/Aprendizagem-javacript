//Hoisting function: Pode declarar a função em qualquer lugar
function darOi() {
    console.log('oi');
}
darOi();



//Function expression: declarar função como uma variavel
const souUmDado = function(funcao) {
    console.log('irei declarar um parametro como uma função');
    funcao();
}

souUmDado(darOi);  


//Arrow function

const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
}
funcaoArrow();