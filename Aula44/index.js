// try {
//     console.log(naoExisto);
// } catch(e) {
//     console.log(e);
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }
    return x + y;
}


try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(e) {
    console.log(3);
    console.log('Alguma coisa mais amigável para o usuario');
}