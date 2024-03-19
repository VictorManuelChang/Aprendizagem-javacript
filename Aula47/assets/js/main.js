function relogio() {
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000); //está em milisegundos, por isso multiplicamos por mil
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'GMT'
        });
    }
    
    console.log(getTimeFromSeconds(10));
    
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;   
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const elemento = e.target;
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
    
    // iniciar.addEventListener('click', function(event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });
    // pausar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.classList.add('pausado')
    // });
    
    // zerar.addEventListener('click', function(event) {
    //     clearInterval(timer);
    //     relogio.innerHTML = "00:00:00";
    //     segundos = 0;
    // });
}

relogio();