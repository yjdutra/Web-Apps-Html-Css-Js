const input = document.querySelector(".input");
const button = document.querySelector(".submit");
const lista = document.querySelector(".lista");

function criaLi() {
  const li = document.createElement("li");
  return li;
}
//Obter a tecla precionada, serve para qualquer uma
//No caso a tecla 13 corresponde ao ENTER.
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!input.value) return;
    criaTarefa(input.value);
  }
});

//Funcao para Limpar o input e seleciona-lo.
function limpaInput() {
  input.value = "";
  input.focus();
}

function createButtonDelet(li) {
  li.innerText += " ";
  const buttonDelet = document.createElement("button");
  buttonDelet.innerText = "X";
  buttonDelet.setAttribute("class", "apagar");
  buttonDelet.setAttribute("title", "Deletar esta tarefa");
  li.appendChild(buttonDelet);
}

function criaTarefa(textoInput) {
  const li = criaLi();

  li.innerText = textoInput;
  lista.appendChild(li);
  limpaInput();
  createButtonDelet(li);
  salvarTarefas();
}

button.addEventListener("click", () => {
  if (!input.value) return;
  criaTarefa(input.value);
});

document.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = lista.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("X", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  //Convertendo em uma string no formatp JSON
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  //convertendo o JSON novamente em um array (objeto JavaScript)
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionaTarefasSalvas();
