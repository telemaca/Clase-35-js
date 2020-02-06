// Estación del año

// Crear un programa que pregunte por el día, el mes, y el hemisferio (norte/sur) y devuelva la estación del año correspondiente




const userDay = Number(prompt(`¿Qué día es? (Ingrese el número).`))
const userMonth = Number(prompt(`¿Qué mes es? (Ingrese el número).`))
const userHemisphere = prompt(`¿En qué hemisferio se encuentra: norte o sur?`)


if (userHemisphere === "sur"){

    if ((userMonth === 12 && userDay >= 21) || userMonth === 1 || userMonth === 2 || (userMonth === 3 && userDay < 21)) {
        alert(`Es verano.`)
    } else if ((userMonth === 3 && userDay >= 21) || userMonth === 4 || userMonth === 5 || (userMonth === 6 && userDay < 21)) {
        alert(`Es otoño.`)
    } else if ((userMonth === 6 && userDay >= 21) || userMonth === 7 || userMonth === 8 || (userMonth === 9 && userDay < 21)) {
        alert(`Es invierno.`)
    } else if ((userMonth === 9 && userDay >= 21) || userMonth === 10 || userMonth === 11 || (userMonth === 12 && userDay < 21)) {
        alert(`Es primavera.`)
    }
} else if (userHemisphere === "norte"){
    if ((userMonth === 12 && userDay >= 21) || userMonth === 1 || userMonth === 2 || (userMonth === 3 && userDay < 21)) {
        alert(`Es invierno.`)
    } else if ((userMonth === 3 && userDay >= 21) || userMonth === 4 || userMonth === 5 || (userMonth === 6 && userDay < 21)) {
        alert(`Es primavera.`)
    } else if ((userMonth === 6 && userDay >= 21) || userMonth === 7 || userMonth === 8 || (userMonth === 9 && userDay < 21)) {
        alert(`Es verano.`)
    } else if ((userMonth === 9 && userDay >= 21) || userMonth === 10 || userMonth === 11 || (userMonth === 12 && userDay < 21)) {
        alert(`Es otoño.`)
    }
}