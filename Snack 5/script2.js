// Snack #5:

// Crea un array vuoto.

// Chiedi per 6 volte all’utente di inserire un numero.

// Se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.

// Stampa l'array nella console.

var numeriDispari = [];

for (var i = 0; i < 6; i++) {
    var numeroUtente = parseInt(prompt("Dimmi un numero"));
    console.log(numeroUtente);

    if (isOdd(numeroUtente)) {
        numeriDispari.push(numeroUtente);
    }
}

console.log( "Array di numeri dispari: ", numeriDispari);

// Functions

function isOdd (number) {
    return (number % 2 == 1);
}

// Equivalente a dire: 

// function isOdd (number) {

//     if (number % 2 == 1){
//         return true;
//     } else {
//         return false;
//     }
// } 