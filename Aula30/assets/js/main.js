//PRIMEIRO JEITO

// const h1 = document.querySelector('.container h1');
// const data = new Date();


// function obterDiaDaSemanaEmTexto(diaSemana) {

//     switch (diaSemana) {
//         case 0:
//             diaSemana = 'domingo';
//             break;
//         case 1:
//             diaSemana = 'segunda-feira';
//             break;
//         case 2:
//             diaSemana = 'terça-feira';
//             break;
//         case 3:
//             diaSemana = 'quarta-feira';
//             break;
//         case 4:
//             diaSemana = 'quinta-feira';
//             break;
//         case 5:
//             diaSemana = 'sexta-feira';
//             break;
//         case 6:
//             diaSemana = 'sábado-feira';
//             break;
//         default:
//             diaSemana = '';
//     }
//     return diaSemana;
// }


// function obterDiaDoMesEmTexto(numeroMes) {

    
//     switch (numeroMes) {
//         case 0:
//             numeroMes = 'janeiro';
//             break;
//         case 1:
//             numeroMes = 'fevereiro';
//             break;
//         case 2:
//             numeroMes = 'março';
//             break;
//         case 3:
//             numeroMes = 'abril';
//             break;
//         case 4:
//             numeroMes = 'maio';
//             break;
//         case 5:
//             numeroMes = 'junho';
//             break;
//         case 6:
//             numeroMes = 'julho';
//             break;
//         case 7:
//             numeroMes = 'agosto';
//             break;
//         case 8:
//             numeroMes = 'setembro';
//             break;
//         case 9:
//             numeroMes = 'outubro';
//             break;
//         case 10:
//             numeroMes = 'novembro';
//             break;
//         case 11:
//             numeroMes = 'dezembro';
//             break;
//         default:
//             numeroMes = '';

//     }
//     return numeroMes;
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num: `0${num}`;
// }


// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = obterDiaDaSemanaEmTexto(diaSemana);
//     const nomeMes = obterDiaDoMesEmTexto(numeroMes);

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
//      ` ${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}`;
// }


// h1.innerHTML = criaData(data);


//SEGUNDO JEITO

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// }

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);

//TERCEIRO JEITO

const h1 = document.querySelector('.container h1');
const data = new Date();


function obterDiaDaSemanaEmTexto(diaSemana) {
    const Semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
    return Semana[diaSemana];
}


function obterDiaDoMesEmTexto(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}


function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = obterDiaDaSemanaEmTexto(diaSemana);
    const nomeMes = obterDiaDoMesEmTexto(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` +
     ` ${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}`;
}


h1.innerHTML = criaData(data);