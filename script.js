const boxDigit1 = document.getElementById("digit1");
const boxDigit2 = document.getElementById("digit2");
const boxDigit3 = document.getElementById("digit3");
const boxDigit4 = document.getElementById("digit4");
const boxDigit5 = document.getElementById("digit5");

const buttonNumber1 = document.getElementById("number1");
const buttonNumber2 = document.getElementById("number2");
const buttonNumber3 = document.getElementById("number3");
const buttonNumber4 = document.getElementById("number4");
const buttonNumber5 = document.getElementById("number5");
const buttonNumber6 = document.getElementById("number6");
const buttonNumber7 = document.getElementById("number7");
const buttonNumber8 = document.getElementById("number8");
const buttonNumber9 = document.getElementById("number9");
const buttonNumber0 = document.getElementById("number0");

let posicaoAtual = 0
let digitos = [undefined, undefined, undefined, undefined, undefined];


function atualizaDigitos() {
  console.log(digitos)
  console.log(posicaoAtual)
  boxDigit1.textContent = digitos[0]
  boxDigit2.textContent = digitos[1]
  boxDigit3.textContent = digitos[2]
  boxDigit4.textContent = digitos[3]
  boxDigit5.textContent = digitos[4]
}

function buttonPressed(buttonNumber) {
  if (posicaoAtual >= 0 && posicaoAtual < 5) {
    digitos[posicaoAtual] = buttonNumber
    posicaoAtual += 1
    atualizaDigitos()
  }
}

buttonNumber1.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(1)
})

buttonNumber2.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(2)
})
buttonNumber3.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(3)
})

buttonNumber4.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(4)
})

buttonNumber5.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(5)
})

buttonNumber6.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(6)
})

buttonNumber7.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(7)
})

buttonNumber8.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(8)
})

buttonNumber9.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(9)
})

buttonNumber0.addEventListener("click", (event) => {
  event.preventDefault()
  buttonPressed(0)
})

// Para cada número, preciso saber qual a posição atual do digito e preencher com ele


// Se o comando for branco, todos os digitos ficam em branco
// Se o comando for corrigir, apaga o digito atual
// Se o comando for confirmar, faz as seguintes validações:
// Se foram preenchidos todos os números, vai validar se o candidato é válido
// Se o candidato é valido, vai mostrar a foto, o nome e o partido do candidato
// Se o candidato não é valido, não mostra a foto, o nome e partido
// Pressionando uma segunda vez o confirma, registra o voto


