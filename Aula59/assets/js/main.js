function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {   
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.key !== 'Enter')  return;
            this.realizaConta();
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const element = e.target;
            if (element.classList.contains('btn-num')) this.adicionaNumero(element);
            if (element.classList.contains('btn-clear')) this.clearNumero();
            if (element.classList.contains('btn-del')) this.deletNumero();
            if (element.classList.contains('btn-eq')) this.realizaConta(element);
        });
    };


    this.adicionaNumero = element => this.display.value += element.innerText;

    this.clearNumero = () => this.display.value  = '';

    this.deletNumero = () =>this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta){
                alert('conta inválida'); 
                return;
            } 
            this.display.value = conta;
        } catch(e) {
            alert('conta inválida');
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia();