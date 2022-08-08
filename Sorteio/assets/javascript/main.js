const form = document.querySelector(".form");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const input = document.querySelector(".input");
  let inputValue = input.value;

  Nomes.push(inputValue);
  Count++;

  EscreverNumeroPessoas(Count);
  console.log(Nomes);
});

const ButtonSortear = document.querySelector(".sortear");
ButtonSortear.addEventListener("click", function () {
  NumeroSorteado = Sortear(0, Count);

  EscreverPessoaSorteada(Nomes[NumeroSorteado]);
  console.log(NumeroSorteado, Nomes[NumeroSorteado]);
});

const Nomes = [];
let Count = 0;

function EscreverNumeroPessoas(numero) {
  const RespostaNumero = document.querySelector(".NumeroPessoas");

  RespostaNumero.innerHTML = `<p> ${numero} Pessoas Cadastradas </p>`;
}

function EscreverPessoaSorteada(sorteado) {
  const RespostaNome = document.querySelector(".resposta");

  RespostaNome.innerHTML = `<p> &#127882 ${sorteado} &#127882 Parabéns! Você foi sorteado !!</p>`;
}

function Sortear(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  NumeroSorteado = Math.trunc(Math.random() * (max - min) + min);

  console.log(NumeroSorteado);
  return NumeroSorteado;
}
