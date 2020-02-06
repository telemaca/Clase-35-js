const card1Number = Number(prompt(`Ingrese el número de la primera carta:`));
const card1Suit = prompt(`Ingrese el palo de la primera carta:`);

const card2Number = Number(prompt(`Ingrese el número de la segunda carta:`));
const card2Suit = prompt(`Ingrese el palo de la segunda carta:`);

const card3Number = Number(prompt(`Ingrese el número de la tercera carta:`));
const card3Suit = prompt(`Ingrese el palo de la tercera carta:`);

const envidoMessage = `Sus puntos de envido son:`

const card1Figure = card1Number === 10 || card1Number === 11 || card1Number === 12;
const card2Figure = card2Number === 10 || card2Number === 11 || card2Number === 12;
const card3Figure = card3Number === 10 || card3Number === 11 || card3Number === 12;


if (card1Suit === card2Suit) {
    if (card1Figure && card2Figure) {
        alert(envidoMessage + " 20")
    }  else if (card1Figure) {
        envido = card2Number + 20;
        alert(envidoMessage + " " + envido)
    } else if (card2Figure) {
        envido = card1Number + 20;
        alert(envidoMessage + " " + envido)
    } else {
        envido = card1Number + card2Number + 20;
        alert(envidoMessage + " " + envido)
    }
} else if (card1Suit === card3Suit) {
    if (card1Figure && card3Figure) {
        alert(envidoMessage + " 20")
    } else if (card1Figure) {
        envido = card3Number + 20;
        alert(envidoMessage + " " + envido)
    } else if (card3Figure) {
        envido = card1Number + 20;
        alert(envidoMessage + " " + envido)
    } else {
        envido = card1Number + card3Number + 20;
        alert(envidoMessage + " " + envido)
    }
} else if (card2Suit === card3Suit) {
    if (card2Figure && card3Figure) {
        alert(envidoMessage + " 20")
    } else if (card2Figure) {
        envido = card3Number + 20;
        alert(envidoMessage + " " + envido)
    } else if (card3Figure) {
        envido = card2Number + 20;
        alert(envidoMessage + " " + envido)
    } else {
        envido = card2Number + card3Number + 20;
        alert(envidoMessage + " " + envido)
    }
} else {
    alert(`No tiene envido.`)
}