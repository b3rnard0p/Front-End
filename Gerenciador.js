function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "login" && senha == "senha") {
        location.href = "Gerenciador.html";
    }
    else {
        alert("Usuário ou senha incorretos");
    }
}

const LISTA_PENDENTE = 1;
const LISTA_CONCLUIDA = 2;

let pendentes = [];
let concluidas = [];
let ListaAtual = LISTA_PENDENTE;
let tempoMaximo = 0;
let tempoRestante = 0;
let intervalId = null;

function exibirPendentes() {
    ListaAtual = LISTA_PENDENTE;
    painel.innerHTML = "";
    const pendentesOrdenados = pendentes.sort((a, b) => {
        if (a.prioridade === "alta") return -1;
        if (a.prioridade === "media" && b.prioridade !== "alta") return -1;
        if (a.prioridade === "baixa" && b.prioridade !== "alta" && b.prioridade !== "media") return -1;
        return 1;
    });

    for (let i = 0; i < pendentes.length; i++) {
        const tarefa = pendentes[i];
        const prioridade = tarefa.prioridade;
        const nome = tarefa.nome;
        const dataHoraInicio = tarefa.dataHoraInicio;
        const cronometro = calcularTempoDecorrido(dataHoraInicio);

        let classePrioridade = "";
        if (prioridade === "alta") {
            classePrioridade = "prioridade-alta";
        } else if (prioridade === "media") {
            classePrioridade = "prioridade-media";
        } else if (prioridade === "baixa") {
            classePrioridade = "prioridade-baixa";
        }
        const taskHTML = `
                    <div class="task ${classePrioridade}">
                        <label>${nome}</label>
                        <span>Cronômetro: <span id="cronometro-${i}">${cronometro}</span></span>
                        <span>Início: ${dataHoraInicio}</span>
                        <button onclick="concluirTarefa(${i})">&#9989;</button> 
                        <button onclick="alterarTarefa(${i}, pendentes)">&#9997;</button>
                        <button onclick="excluirTarefa(${i}, pendentes)">&#10006;</button>
                    </div>`;

        painel.innerHTML += taskHTML;

        iniciarCronometro(i, dataHoraInicio);
    }
}

function exibirConcluidas() {
    ListaAtual = LISTA_CONCLUIDA;
    painel.innerHTML = "";
    for (let i = 0; i < concluidas.length; i++) {
        const tarefa = concluidas[i];
        const prioridade = tarefa.prioridade;
        const nome = tarefa.nome;
        const dataHoraInicio = tarefa.dataHoraInicio;
        const dataHoraConclusao = tarefa.dataHoraConclusao;
        const cronometro = calcularTempoDecorrido(dataHoraInicio, dataHoraConclusao);

        let classePrioridade = "";
        if (prioridade === "alta") {
            classePrioridade = "prioridade-alta";
        } else if (prioridade === "media") {
            classePrioridade = "prioridade-media";
        } else if (prioridade === "baixa") {
            classePrioridade = "prioridade-baixa";
        }
        painel.innerHTML += `
        <div class="task ${classePrioridade}">
                <label>${nome}</label>
                <span>Cronômetro: ${cronometro}</span>
                <span>Início: ${dataHoraInicio}</span>
                <span>Conclusão: ${dataHoraConclusao}</span>
                <button onclick="desconcluirTarefa(${i})">&#10062;</button> 
                <button onclick="alterarTarefa(${i}, concluidas)">&#9997;</button>
                <button onclick="excluirTarefa(${i}, concluidas)">&#10006;</button>
            </div>`;
    }
}

function criarTarefa(event) {
    if (event.key === "Enter") {
        const nome = document.getElementById("inputTarefa").value;
        const prioridade = document.getElementById("prioridade").value;
        const dataHoraInicio = new Date().toLocaleString();
        const tempoInput = document.getElementById("tempo").value;
        const unidade = document.getElementById("unidade").value;
        const tempoMaximo = converter(tempoInput, unidade);
        const novaTarefa = {
            nome: nome,
            prioridade: prioridade,
            dataHoraInicio: dataHoraInicio,
            tempoMaximo: tempoMaximo,
            tempoRestante: tempoMaximo,
            intervalId: null
        };

        if (nome === "") {
            alert("Não é possível adicionar uma tarefa vazia.");
        } else if (tarefaDuplicada(nome)) {
            alert("Já existe uma tarefa com esse nome.");
        } else {
            pendentes.push(novaTarefa);
            if (ListaAtual === LISTA_PENDENTE) {
                exibirPendentes();
            }
            iniciarCronometro(pendentes.length - 1);
        }

        document.getElementById("inputTarefa").value = "";
    }
}

function tarefaDuplicada(nome) {
    return pendentes.some(tarefa => tarefa.nome === nome) || concluidas.some(tarefa => tarefa.nome === nome);
}


function concluirTarefa(index) {
    const tarefa = pendentes[index];
    const dataHoraConclusao = new Date().toLocaleString();
    tarefa.dataHoraConclusao = dataHoraConclusao;
    concluidas.push(tarefa);
    pendentes.splice(index, 1);
    exibirPendentes();
}

function alterarTarefa(index, lista) {
    const tarefa = lista[index];
    const novoNome = prompt('Digite o novo nome da tarefa:');
    if (novoNome) {
        tarefa.nome = novoNome;

        if (lista === pendentes) {
            exibirPendentes();
        } else if (lista === concluidas) {
            exibirConcluidas();
        }
    }
}

function excluirTarefa(index, lista) {
    const tarefa = lista[index];
    if (confirm(`Você realmente quer excluir ${tarefa.nome}?`)) {
        lista.splice(index, 1);
        if (lista === pendentes) {
            exibirPendentes();
        } else {
            exibirConcluidas();
        }
    }
}

function desconcluirTarefa(index) {
    const tarefa = concluidas[index];
    tarefa.dataHoraConclusao = undefined;
    pendentes.push(tarefa);
    concluidas.splice(index, 1);
    exibirConcluidas();
}

function calcularTempoDecorrido(dataHoraInicio, dataHoraFim) {
    const inicio = new Date(dataHoraInicio);
    const fim = dataHoraFim ? new Date(dataHoraFim) : new Date();
    const diff = Math.abs(fim - inicio);
    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
}

function iniciarCronometro(index) {
    const tarefa = pendentes[index];
    if (tarefa.intervalId) {
        clearInterval(tarefa.intervalId);
    }

    tarefa.intervalId = setInterval(() => {
        atualizarCronometro(index);
    }, 1000);
}

function atualizarCronometro(index) {
    const tarefa = pendentes[index];
    const minutos = Math.floor(tarefa.tempoRestante / (1000 * 60));
    const segundos = Math.floor((tarefa.tempoRestante % (1000 * 60)) / 1000);
    const cronometroElemento = document.getElementById(`cronometro-${index}`);
    cronometroElemento.textContent = formatarTempo(minutos) + ":" + formatarTempo(segundos);

    if (tarefa.tempoRestante <= 0) {
        clearInterval(tarefa.intervalId);
        cronometroElemento.innerText = "Tempo máximo atingido";
        return;
    }

    tarefa.tempoRestante -= 1000;
}

function formatarTempo(tempo) {
    return tempo < 10 ? "0" + tempo : tempo;
}

function converter(tempo, unidade) {
    if (unidade === "segundos") {
        return tempo * 1000;
    } else if (unidade === "minutos") {
        return tempo * 1000 * 60;
    } else if (unidade === "horas") {
        return tempo * 1000 * 60 * 60;
    } else if (unidade === "dias") {
        return tempo * 1000 * 60 * 60 * 24;
    }
    return 0;
}

exibirPendentes();