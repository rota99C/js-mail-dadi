/*//Mail
//Chiedi all’utente la sua email
const userEmail = prompt("Ciao! qual è la tua Email?")
//console.log(userEmail);
//creo la lista delle Mail che possono accedere
const validEmail = ["jijiwiy976@proxiesblog.com", "jamila_girltjeq@pianoxltd.com", "jalexmhalexp@toecye.com"]
//console.log(validEmail);
//controlla che sia nella lista di chi può accedere

let allowed = false; // perché a nessuno di base è consentito l'accesso

for (let i = 0; i < validEmail.length; i++) {
    const user = validEmail[i];
    // console.log(user);

    if (userEmail == user) {
        allowed = true;
    }
}

//stampa un messaggio appropriato sull’esito del controllo.
if (allowed) {
    document.getElementById("messageEmail").innerHTML = "benvenuto nella tua area personale!"
} else {
    document.getElementById("messageEmail").innerHTML = "ACCESSO NEGATO!"
} */



//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let userNumber = Math.floor(Math.random() * 6) + 1
console.log(userNumber);
let pcNumber = Math.floor(Math.random() * 6) + 1
console.log(pcNumber);


//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (userNumber > pcNumber) {
    //console.log("il vincitore è User");
    document.getElementById("messageRandom").innerHTML = "il vincitore è User"
}

else if (userNumber == pcNumber) {
    //console.log(" nessuno ha vinto!");
    document.getElementById("messageRandom").innerHTML = "nessuno ha vinto"
}

else {
    //console.log("il vincitore è Pc");
    document.getElementById("messageRandom").innerHTML = "il vincitore è pc"
}













