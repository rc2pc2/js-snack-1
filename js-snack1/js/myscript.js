/**
 *
 * L'utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
 */

// const firstWord = prompt('Insert the first word');
// const secondWord = prompt('Insert the secondWord word');

// if (firstWord.length === secondWord.length){
//     console.log('The words share the same length');
// } else if (firstWord.length > secondWord.length){
//     console.log('The first word is the longest');
// } else {
//     console.log('The second word is the longest');
// }

// Snack 1:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// ? - let sum = 0;

// ? - ciclo per 10 volte
    // § - prompt
    // § - prendo la parte intera del numero inserito dall'utente
    // § - sommo il numero inserito dall'utente
    // § - sum = sum + userNumber;

// ? - diciamo all'utentessa qual'è la somma di tutti i numeri inseriti, in console
// ? - console.log(sum)

let sum = 0;

for (let index = 0; index < 10; index++) {
    // sum = sum + parseInt(prompt('Insert a number'));
    if ( !isNaN(parseInt(prompt('Insert a number')))){
        sum += parseInt(prompt('Insert a number'));
    }
}

console.log(sum);