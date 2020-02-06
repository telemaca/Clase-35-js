let random1 = Math.round(Math.random() * 3);
let random2 = Math.round(Math.random() * 3);
let random3 = Math.round(Math.random() * 3);
let random4 = Math.round(Math.random() * 3);
let random5 = Math.round(Math.random() * 3);

if (random1 === 0) {
    random1 = "rojo"
} else if (random1 === 1) {
    random1 = "azul"
} else if (random1 === 2) {
    random1 = "amarillo"
} else if (random1 === 3) {
    random1 = "verde"
}

if (random2 === 0) {
    random2 = "rojo"
} else if (random2 === 1) {
    random2 = "azul"
} else if (random2 === 2) {
    random2 = "amarillo"
} else if (random2 === 3) {
    random2 = "verde"
}

if (random3 === 0) {
    random3 = "rojo"
} else if (random3 === 1) {
    random3 = "azul"
} else if (random3 === 2) {
    random3 = "amarillo"
} else if (random3 === 3) {
    random3 = "verde"
}

if (random4 === 0) {
    random4 = "rojo"
} else if (random4 === 1) {
    random4 = "azul"
} else if (random4 === 2) {
    random4 = "amarillo"
} else if (random4 === 3) {
    random4 = "verde"
}

if (random5 === 0) {
    random5 = "rojo"
} else if (random5 === 1) {
    random5 = "azul"
} else if (random5 === 2) {
    random5 = "amarillo"
} else if (random5 === 3) {
    random5 = "verde"
}


alert (`Simón dice: ${random1}, ${random2}, ${random3}, ${random4}, ${random5}.`)


const userFirstColor = prompt(`Ingrese el primer color:`)
const userSecondColor = prompt(`Ingrese el segundo color:`)
const userThirdColor = prompt(`Ingrese el tercer color:`)
const userFourthColor = prompt(`Ingrese el cuarto color:`)
const userFifthColor = prompt(`Ingrese el quinto color:`)

if ((random1 === userFirstColor) && (random2 === userSecondColor) && (random3 === userThirdColor) && (random4 === userFourthColor) && (random5 === userFifthColor)){
    alert(`¡Ganaste!`)
} else {
    alert(`Perdiste.`)
}