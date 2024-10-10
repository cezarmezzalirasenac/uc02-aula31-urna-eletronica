const candidatos = [
  {
    nome: "Fulano Neto",
    vicePrefeito: "Beltrano Junior",
    cargo: "Prefeito",
    foto: "perfil.jpg",
    numero: 99,
    votos: 0
  },
  {
    nome: "João da Silva",
    vicePrefeito: "José de Tal",
    cargo: "Prefeito",
    foto: "perfil.jpg",
    numero: 77,
    votos: 0
  },
  {
    nome: "Ciclano de Tal",
    vicePrefeito: "Deltano de Tal",
    cargo: "Prefeito",
    foto: "perfil.jpg",
    numero: 10,
    votos: 0
  },
  {
    nome: "José Pleno",
    cargo: "vereador",
    foto: "perfil.jpg",
    numero: 99099,
    votos: 0
  },
  {
    nome: "Capivara",
    cargo: "vereador",
    foto: "capivara.jpg",
    numero: 77777,
    votos: 0
  },
  {
    nome: "Mega Mente",
    cargo: "vereador",
    foto: "megamente.jpg",
    numero: 10157,
    votos: 0
  },
  {
    nome: "Quero Quero",
    cargo: "vereador",
    foto: "quero-quero.jpg",
    numero: 99999,
    votos: 0
  },
  {
    nome: "Em branco",
    numero: "branco",
    votos: 0
  },
  {
    nome: "Nulo",
    numero: "nulo",
    votos: 0
  },
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

let candidatoValido = null

const divDigits = document.getElementById("digits")

const message = document.createElement("h2")
message.setAttribute("id", "message")

const boxDigit1 = document.getElementById("digit1")
const boxDigit2 = document.getElementById("digit2")
const boxDigit3 = document.getElementById("digit3")
const boxDigit4 = document.getElementById("digit4")
const boxDigit5 = document.getElementById("digit5")

const buttonNumber1 = document.getElementById("number1")
const buttonNumber2 = document.getElementById("number2")
const buttonNumber3 = document.getElementById("number3")
const buttonNumber4 = document.getElementById("number4")
const buttonNumber5 = document.getElementById("number5")
const buttonNumber6 = document.getElementById("number6")
const buttonNumber7 = document.getElementById("number7")
const buttonNumber8 = document.getElementById("number8")
const buttonNumber9 = document.getElementById("number9")
const buttonNumber0 = document.getElementById("number0")

const buttonCommandWhite = document.getElementById("command-white")
const buttonCommandErase = document.getElementById("command-erase")
const buttonCommandConfirm = document.getElementById("command-confirm")


const divCandidate = document.getElementById("candidate")
const imgCandidate = document.createElement("img")
imgCandidate.setAttribute("id", "img-candidate")

const titleParty = document.createElement("h3")
titleParty.setAttribute("id", "party")

const titleNameCandidate = document.createElement("h4")
titleNameCandidate.setAttribute("id", "name-candidate")

let posicaoAtual = 0
let digitos = [undefined, undefined, undefined, undefined, undefined]
let voto

function limparDigitos() {
  for (let i = 0; i < 5; i++) {
    digitos[i] = undefined
  }
  posicaoAtual = 0
}

function atualizaDigitos() {
  console.log(digitos)
  console.log(posicaoAtual)
  boxDigit1.textContent = digitos[0]
  boxDigit2.textContent = digitos[1]
  boxDigit3.textContent = digitos[2]
  boxDigit4.textContent = digitos[3]
  boxDigit5.textContent = digitos[4]
}

function mostrarCandidato(candidato) {
  candidatoValido = candidato
  imgCandidate.setAttribute("src", `./assets/${candidato.foto}`)
  titleNameCandidate.textContent = candidato.nome
  const numeroPartidoCandidato = `${candidato.numero}`.slice(0, 2)
  const partido = partidos.find((p) => p.numero === Number(numeroPartidoCandidato))
  titleParty.textContent = partido.nome
  divCandidate.appendChild(imgCandidate)
  divCandidate.appendChild(titleNameCandidate)
  divCandidate.appendChild(titleParty)
}

function limparCandidato() {
  divCandidate.removeChild(imgCandidate)
  divCandidate.removeChild(titleNameCandidate)
  divCandidate.removeChild(titleParty)
}

function mostrarDigitos() {
  if (voto === "branco") {
    divDigits.removeAttribute("class", "white-vote")
    divDigits.removeChild(message)
    divDigits.appendChild(boxDigit1)
    divDigits.appendChild(boxDigit2)
    divDigits.appendChild(boxDigit3)
    divDigits.appendChild(boxDigit4)
    divDigits.appendChild(boxDigit5)
  }
}

function buttonDigitPressed(buttonNumber) {
  if (posicaoAtual >= 0 && posicaoAtual < 5) {
    digitos[posicaoAtual] = buttonNumber
    posicaoAtual += 1
    atualizaDigitos()
  }
  // se a posicao atual for maior ou igual a 5 
  // vai procurar o candidato na lista de candidatos e mostrar seus dados
  if (posicaoAtual == 5) {
    const numeroDigitado = digitos.join("")
    voto = numeroDigitado
    const candidatoExiste = candidatos.find((candidato) => candidato.numero == numeroDigitado)
    if (!candidatoExiste) return
    mostrarCandidato(candidatoExiste)

  }
}

buttonNumber1.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(1)
})

buttonNumber2.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(2)
})

buttonNumber3.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(3)
})

buttonNumber4.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(4)
})

buttonNumber5.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(5)
})

buttonNumber6.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(6)
})

buttonNumber7.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(7)
})

buttonNumber8.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(8)
})

buttonNumber9.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(9)
})

buttonNumber0.addEventListener("click", (event) => {
  event.preventDefault()
  buttonDigitPressed(0)
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
  mostrarDigitos()
  console.log(voto)
  if (voto !== "branco" && voto !== "nulo") {
    limparCandidato()
  }
  voto = undefined

  limparDigitos()
  atualizaDigitos()
})
// Se o comando for confirmar, faz as seguintes validações:
// Se foram preenchidos todos os números, vai validar se o candidato é válido
// Se o candidato é valido, vai mostrar a foto, o nome e o partido do candidato
// Se o candidato não é valido, não mostra a foto, o nome e partido
// Pressionando uma segunda vez o confirma, registra o voto

buttonCommandConfirm.addEventListener("click", (event) => {
  event.preventDefault()
  if (!voto) return
  console.log(typeof voto)
  const posicaoCandidato = candidatos.findIndex((candidato) => String(candidato.numero) === voto)
  const posicaoCandidatoNulo = candidatos.findIndex((candidato) => candidato.numero === "nulo")
  if (posicaoCandidato === -1) {
    candidatos[posicaoCandidatoNulo].votos += 1
  } else {
    candidatos[posicaoCandidato].votos += 1
    if (voto !== "branco") {
      limparCandidato()
    } else {
      mostrarDigitos()
    }
  }

  voto = undefined
  limparDigitos()
  atualizaDigitos()
  console.log(candidatos)
})


