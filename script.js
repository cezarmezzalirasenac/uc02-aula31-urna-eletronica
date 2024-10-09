const candidatos = [
  {
    nome: "Fulano Neto",
    vicePrefeito: "Beltrano Junior",
    cargo: "Prefeito",
    foto: "perfil.jpg",
    numeroPartido: 99,
    votos: 0
  },
  {
    nome: "João da Silva",
    vicePrefeito: "José de Tal",
    cargo: "Prefeito",
    foto: "perfil.jpg",
    numeroPartido: 77,
    votos: 0
  },
  {
    nome: "Ciclano de Tal",
    vicePrefeito: "Deltano de Tal",
    cargo: "Prefeito",
    foto: "perfil.jpg",
    numeroPartido: 10,
    votos: 0
  },
  {
    nome: "José Pleno",
    cargo: "vereador",
    foto: "perfil.jpg",
    numeroPartido: 99099,
    votos: 0
  },
  {
    nome: "Capivara",
    cargo: "vereador",
    foto: "capivara.jpg",
    numeroPartido: 77777,
    votos: 0
  },
  {
    nome: "Mega Mente",
    cargo: "vereador",
    foto: "megamente.jpg",
    numeroPartido: 10157,
    votos: 0
  },
  {
    nome: "Quero Quero",
    cargo: "vereador",
    foto: "quero-quero.jpg",
    numeroPartido: 99999,
    votos: 0
  }
]

const partidos = [
  {
    numero: 10,
    nome: "Partido 10",
    sigla: "P10",
    votos: 0
  },
  {
    numero: 77,
    nome: "Partido 77",
    sigla: "P77",
    votos: 0
  },
  {
    numero: 99,
    nome: "Partido 99",
    sigla: "P99",
    votos: 0
  }
]

const divDigits = document.getElementById("digits");

const message = document.createElement("h2")
message.setAttribute("id", "message")

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

const buttonCommandWhite = document.getElementById("command-white");
const buttonCommandErase = document.getElementById("command-erase");
const buttonCommandConfirm = document.getElementById("command-confirm");

let posicaoAtual = 0
let digitos = [undefined, undefined, undefined, undefined, undefined];
let voto

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
// remover as divs dos digitos e mostrar o h1 da mensagem
buttonCommandWhite.addEventListener("click", (event) => {
  event.preventDefault()
  if (voto === "branco") return

  divDigits.removeChild(boxDigit1)
  divDigits.removeChild(boxDigit2)
  divDigits.removeChild(boxDigit3)
  divDigits.removeChild(boxDigit4)
  divDigits.removeChild(boxDigit5)

  divDigits.setAttribute("class", "white-vote")
  divDigits.appendChild(message)

  message.textContent = "VOTO EM BRANCO"
  voto = "branco"
})

// Se o comando for corrigir, apaga o digito atual
buttonCommandErase.addEventListener("click", (event) => {
  event.preventDefault()
  // caso o voto esteja em branco, então só adiciona os campos dos digitos na tela novamente
  if (voto === "branco") {
    divDigits.removeAttribute("class", "white-vote")
    divDigits.removeChild(message)
    divDigits.appendChild(boxDigit1)
    divDigits.appendChild(boxDigit2)
    divDigits.appendChild(boxDigit3)
    divDigits.appendChild(boxDigit4)
    divDigits.appendChild(boxDigit5)
    voto = undefined
  }

  for (let i = 0; i < 5; i++) {
    digitos[i] = undefined
  }
  posicaoAtual = 0
  atualizaDigitos()
})
// Se o comando for confirmar, faz as seguintes validações:
// Se foram preenchidos todos os números, vai validar se o candidato é válido
// Se o candidato é valido, vai mostrar a foto, o nome e o partido do candidato
// Se o candidato não é valido, não mostra a foto, o nome e partido
// Pressionando uma segunda vez o confirma, registra o voto


