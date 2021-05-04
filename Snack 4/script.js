// Snack #4:

// Generatore di “nomi cognomi” casuali: 

// Scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var listaNomi = ["Edoardo", "Luca", "Matteo", "Francesco", "lucia", "Eleonora", "Alessandro", "Eva"];

var listaCognomi = ["Rossi", "Batani", "Verdi", "Neri", "Maccherini", "Gialli", "Neri", "Verdi"];

var nomeCognomeRandom = "";

nomeCognome (listaNomi, listaCognomi);
console.log(nomeCognomeRandom);

// ------------------------------ FUNCTIONS

function nomeCognome (array1, array2) {
    
    nomeRandom = array1[Math.floor(Math.random() * array1.length)];

    cognomeRandom = array2[Math.floor(Math.random() * array2.length)];

    nomeCognomeRandom = nomeRandom + " " + cognomeRandom;

    return nomeCognomeRandom;


}