// Snack 4

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let userNumber = Number(prompt("Scegli un numero"));

console.log ("User number:", userNumber);


if (userNumber % 2 == 0) {

    console.log("Numero pari:", userNumber);

} else {

    console.log("Numero successivo:", userNumber + 1);

}