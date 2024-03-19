//Objetos

function criaPessoa (nome, sobrenome, idade) {
    return {nome,sobrenome,idade};
}

const pessoa1 = criaPessoa('Pedro', 'Miranda', 13);

console.log(pessoa1.nome);