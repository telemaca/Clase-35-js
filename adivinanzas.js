const riddle = Math.round(Math.random() * 4);

if (riddle === 0){
    answer = prompt(`Redondo, redondo, barril sin fondo. ¿Qué soy?`);
    if (answer === "anillo"){
        alert(`¡Adivinaste!`)
    } else {
        alert(`No adivinaste.`)
    }
} else if (riddle === 1) {
    answer = prompt(`Es la reina de los mares,
    su dentadura es muy buena,
    y por no ir nunca vacía,
    siempre dicen que va llena.`)
    if (answer === "ballena"){
        alert(`¡Adivinaste!`)
    } else {
        alert(`No adivinaste.`)
    }
} else if (riddle === 2) {
    answer = prompt(`Oro parece, plata no es.
    Quien no lo adivine listo no es.`)
    if (answer === "platano"){
        alert(`¡Adivinaste!`)
    } else {
        alert(`No adivinaste.`)
    }
} else if (riddle === 3) {
    answer = prompt(`Guardada en estrecha cárcel
    por soldados de marfil,
    está una roja culebrea
    que es la madre del mentir.`)
    if (answer === "lengua"){
        alert(`¡Adivinaste!`)
    } else {
        alert(`No adivinaste.`)
    }
} else if (riddle === 4) {
    answer = prompt(`Muchas lamparitas
    muy bien colgaditas,
    siempre encandiladas
    y nadie las atiza.`)
    if (answer === "estrellas"){
        alert(`¡Adivinaste!`)
    } else {
        alert(`No adivinaste.`)
    }
}