//Factory function

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        }
        ,
        fala(assunto) {
            return `${nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        //Getter pegamos só o atributo, ou seja, quando chamarmos imc, não usamos () pq não vemos mais como função
        get imc() {
            const indice = this.peso /(this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
console.log(p1.fala('está falando sobre você'))
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Ana Maria da Braga';
console.log(p1.nome);