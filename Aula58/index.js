function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados usam const ou let
    const Id = 134134;

    //Atributos ou métodos públicos usam this
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {  
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');

console.log(p1.nome);

