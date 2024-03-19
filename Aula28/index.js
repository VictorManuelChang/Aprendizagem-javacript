
// const data = new Date(0);
// console.log(data.toString());//Representado em milisegundos

// const data = new Date(2019, 3, 20, 17, 40, 34);
// console.log(data.toString());


// const data = new Date('2019-04-20 20:20:50');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); //0-Domingo 6-Sábado
function zeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
    
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)