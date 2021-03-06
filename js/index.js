// Descrizione:
// Un alert espone 5 numeri casuali (univoci).
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
// Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )
// Nome della repo per consegnare l’ esercizio: js-simon
// Ricordate di consultare anche le slide come riferimento alle timing functions JS

// Declaration
var numToGuess = qUniqueRandomNums(1, 50, 5);
numToGuess = numToGuess.sort(sortNums);
console.log(numToGuess);
var playerGuess = [];
let rightGuess = [];
// HTML display
let cardDiv = $(".card-div");
let timeOut = 30000;

alert("I numeri da ricordare sono: " + numToGuess);

setTimeout(() => {
    for (let i = 0; i < numToGuess.length; i++) {
        playerGuess.push(
            parseInt(prompt(`Inserisci il ${playerGuess.length + 1}° numero`))
        );
    }
    for (let y = 0; y < numToGuess.length; y++) {
        if (numToGuess.includes(playerGuess[y])) {
            console.log(
                "%c Ti sei ricordato del numero: " + playerGuess[y],
                "color: green"
            );
            rightGuess.push(playerGuess[y]);
        }
    }
    // HTML Display
    for (let x = 0; x < numToGuess.length; x++) {
        let newCard = $(".template .card").clone();
        newCard.append(numToGuess[x]);
        if (playerGuess.includes(numToGuess[x])) {
            newCard.addClass("right");
        } else {
            newCard.addClass("wrong");
        }
        cardDiv.append(newCard);

        // if (playerGuess.includes(numToGuess[x])) {
        //     cardDiv.append(
        //         '<div class="card right" data-element="' +
        //             x +
        //             '">' +
        //             numToGuess[x] +
        //             "</div>"
        //     );
        // } else {
        //     cardDiv.append(
        //         '<div class="card wrong" data-element="' +
        //             x +
        //             '">' +
        //             numToGuess[x] +
        //             "</div>"
        //     );
        // }
    }
    cardDiv.append(
        "<div class='result'>Hai indovinato " +
            rightGuess.length +
            " numeri</div>"
    );
}, timeOut);

// Debug
console.log(playerGuess);

// Functions
/**
 * Generates q unique random numbers
 * @param {int} min minimum
 * @param {int} max maximum
 * @param {int} q length of the array
 */
function qUniqueRandomNums(min, max, q) {
    var output = [];
    var candidate = 0;
    for (var i = 0; i < q; i++) {
        candidate = Math.floor(Math.random() * Math.floor(max - min)) + min;
        while (output.includes(candidate)) {
            candidate = Math.floor(Math.random() * Math.floor(max - min)) + min;
        }
        output.push(candidate);
    }
    return output;
}

/**
 * Sort an array of numbers, used as array.sort(sortNums)
 * @param {int} a
 * @param {int} b
 */
function sortNums(a, b) {
    return a - b;
}
