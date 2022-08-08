const form = document.querySelector(".form");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const inputPeso = document.querySelector(".peso");
  const inputAltura = document.querySelector(".altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    alert("Peso invalido");
    inputPeso.value = "";
    return;
  }

  if (!altura) {
    alert("Altura invalido");
    inputAltura.value = "";
    return;
  }

  const imc = Number(calcularImc(peso, altura));
  const indice = getIndiceImc(imc);

  const msg = `Seu IMC é ${imc} (${indice}.)`;
  console.log(imc, indice, msg);

  setResultado(msg);
});

function getIndiceImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso ideal",
    "Levemente Acima do peso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

function calcularImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criarParagrafo() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const p = criarParagrafo();

  p.innerHTML = msg;
  resultado.appendChild(p);
}
