const form = document.querySelector(".valores");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const gasolinaTag = document.querySelector(".gasolina");
  const etanolTag = document.querySelector(".etanol");

  const gasolina = Number(gasolinaTag.value);
  const etanol = Number(etanolTag.value);

  isNaN(gasolina)
    ? EscreverResposta("Somente números separados por '.'")
    : isNaN(etanol)
    ? EscreverResposta("Somente números separados por '.'")
    : conta(gasolina, etanol);
});

function conta(gasolina, etanol) {
  const calculo = gasolina * 0.7;
  console.log(calculo, gasolina, etanol);

  calculo >= etanol
    ? EscreverResposta("O etanol vai render mais")
    : EscreverResposta("A gasolina vai render mais");
}

function EscreverResposta(texto) {
  const p = document.querySelector(".resposta");
  p.innerHTML = texto;
}
