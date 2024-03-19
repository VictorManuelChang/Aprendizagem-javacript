const inputTarefas = document.querySelector('.input-tarefas');
const buttonTarefas = document.querySelector('.button-tarefas');
const tarefas = document.querySelector('.lista-tarefas');

function criaListas() {
    const lista = document.createElement('li');
    return lista;
}

buttonTarefas.addEventListener('click', function(e) {
    if(!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
    
    
});

function criaTarefa(textoInput) {
    const lista = criaListas();
    lista.innerText = textoInput;
    tarefas.appendChild(lista);
    limpaInput();
    criaBotaoApagar(lista);
    salvarTarefas();
}

inputTarefas.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if(!inputTarefas.value) return;
        criaTarefa(inputTarefas.value);
    }
});

function limpaInput() {
    inputTarefas.value = '';
    inputTarefas.focus();
}

function criaBotaoApagar(lista) {
    lista.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('tittle', 'botao para apagar');
    lista.appendChild(botaoApagar);
}

document.addEventListener('click', function(e) {
    const elemento = e.target;
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const listaTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of listaTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();