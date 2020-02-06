
const random = Math.round(Math.random() * 2);

if (random === 0){
    computerChoice = "piedra"
} else if (random === 1) {
    computerChoice = "papel"
} else if (random === 2) {
    computerChoice = "tijera"
}

const userChoice = prompt(`Piedra, papel o tijera. Escribí tu opción en minúsculas:`);

const message = `Vos elegiste: ${userChoice}
Yo elegí: ${computerChoice}\n`

if (userChoice === computerChoice) {
    alert(message + `Empatamos.`)
} else if (userChoice === "piedra"){
    if (computerChoice === "papel"){
        alert(message + `Te gané.`)
    } else if (computerChoice === "tijera") {
        alert(message + `Me ganaste.`)
    }
} else if (userChoice === "papel"){
    if (computerChoice === "tijera"){
        alert(message + `Te gané.`)
    } else if (computerChoice === "piedra") {
        alert(message + `Me ganaste.`)
    }
} else if (userChoice === "tijera"){
    if (computerChoice === "piedra"){
        alert(message + `Te gané.`)
    } else if (computerChoice === "papel") {
        alert(message + `Me ganaste.`)
    }
}
