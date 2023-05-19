let userNumber = parseInt(prompt('Insert a four digits number'));

if ( !(userNumber > 999 && userNumber < 9999)) {
        userNumber = parseInt(prompt('PLEASE Insert a four digits number'));
}

let sum = 0;

for (let index = 0; index < userNumber.toString().length ; index++) {
    sum += parseInt(userNumber.toString().charAt(index));
}

console.log(sum);