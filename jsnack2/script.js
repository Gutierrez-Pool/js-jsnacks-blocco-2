// Snack 2

// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.

// Quando l'utente trova il numero, fateglielo sapere!




const randomNumberElement = document.querySelector("#numero-random");


document.querySelector("button").addEventListener("click",
    function () {
        
        const secretNumber = Math.floor(Math.random() * 100) + 1;

        randomNumberElement.innerText = secretNumber;


        let userNumber;

        let count = 0;

        do {
            userNumber = Number(prompt("Indovina il numero"));

            if (userNumber > secretNumber) {

                alert ("Troppo alto");

            } else if (userNumber < secretNumber) {

                alert ("Troppo basso");

            }

            count++;

        } while (userNumber !== secretNumber);
    }
)