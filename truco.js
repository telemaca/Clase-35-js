let computerCardNumber = Math.round(Math.random() * 9);
let computerCardSuit = Math.round(Math.random() * 3);

if (computerCardNumber === 0) {
    computerCardNumber = 11
} else if (computerCardNumber === 8) {
    computerCardNumber = 12
} 

if (computerCardSuit === 0) {
    computerCardSuit = "espada"
} else if (computerCardSuit === 1) {
    computerCardSuit = "basto"
} else if (computerCardSuit === 2) {
    computerCardSuit = "oro"
} else if (computerCardSuit === 3) {
    computerCardSuit = "copa"
}

if (computerCardNumber === 1 && computerCardSuit === "espada"){
    computerCard = 14
} else if (computerCardNumber === 1 && computerCardSuit === "basto") {
    computerCard = 13
} else if (computerCardNumber === 7 && computerCardSuit === "espada") {
    computerCard = 12
} else if (computerCardNumber === 7 && computerCardSuit === "oro") {
    computerCard = 11
} else if (computerCardNumber === 3) {
    computerCard = 10
} else if (computerCardNumber === 2) {
    computerCard = 9
} else if ((computerCardNumber === 1 && computerCardSuit === "copa") || 
(computerCardNumber === 1 && computerCardSuit === "oro")) {
    computerCard = 8
} else if (computerCardNumber === 12) {
    computerCard = 7
} else if (computerCardNumber === 11) {
    computerCard = 6
} else if (computerCardNumber === 10) {
    computerCard = 5
} else if ((computerCardNumber === 7 && computerCardSuit === "copa") || 
(computerCardNumber === 7 && computerCardSuit === "basto")) {
    computerCard = 4
} else if (computerCardNumber === 6) {
    computerCard = 3
} else if (computerCardNumber === 5) {
    computerCard = 2
} else if (computerCardNumber === 4) {
    computerCard = 1
}

const userCardNumber = Number(prompt(`Ingrese el número de la carta:`));
const userCardSuit = prompt(`Ingrese el palo de la carta (oro, copa, basto o espada):`);

if (userCardNumber === 1 && userCardSuit === "espada"){
    userCard = 14
} else if (userCardNumber === 1 && userCardSuit === "basto") {
    userCard = 13
} else if (userCardNumber === 7 && userCardSuit === "espada") {
    userCard = 12
} else if (userCardNumber === 7 && userCardSuit === "oro") {
    userCard = 11
} else if (userCardNumber === 3) {
    userCard = 10
} else if (userCardNumber === 2) {
    userCard = 9
} else if ((userCardNumber === 1 && userCardSuit === "copa") || 
(computerCardNumber === 1 && userCardSuit === "oro")) {
    userCard = 8
} else if (userCardNumber === 12) {
    userCard = 7
} else if (userCardNumber === 11) {
    userCard = 6
} else if (userCardNumber === 10) {
    userCard = 5
} else if ((userCardNumber === 7 && userCardSuit === "copa") || 
(userCardNumber === 7 && userCardSuit === "basto")) {
    userCard = 4
} else if (userCardNumber === 6) {
    userCard = 3
} else if (userCardNumber === 5) {
    userCard = 2
} else if (userCardNumber === 4) {
    userCard = 1
}

const message = `Tu carta: ${userCardNumber} de ${userCardSuit}
Mi carta: ${computerCardNumber} de ${computerCardSuit}\n`

if (computerCard > userCard){
    alert(message + "¡Yo gano!")  
} else if (computerCard < userCard) {
    alert(message + "¡Ganaste!")  
} else if (computerCard === userCard) {
    alert(message + "Empatamos.")  
}