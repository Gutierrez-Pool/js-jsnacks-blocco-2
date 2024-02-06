// Snack 3

// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5


// Primo array
const gruppo2 = [3,6,9];
// Secondo array
const gruppo1 = [1,2,3,4,5,6,7,5,7];


if(gruppo1.length < gruppo2.length) {

    while (gruppo1.lenght < gruppo2.length) {
        
        gruppo1.push(gruppo2[gruppo1.length]);
    
    }

} else {

    while (gruppo2.length < gruppo1.length) {
        
        gruppo2.push(gruppo1[gruppo2.length]);
    
    }

}

console.log (gruppo1);
console.log (gruppo2);