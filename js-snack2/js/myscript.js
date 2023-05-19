const guestList = [ 'Minnie', 'Paperina' , 'Pluto', 'Pippo', 'Paperino', 'Gatsby'  ];
const userName = prompt('Insert your name');

let isGuestAGuest = false;

for (let index = 0; index < guestList.length; index++) {
    if (guestList[index] === userName){
        isGuestAGuest = true;
    }
}

if (isGuestAGuest){
    console.log('Welcome!');
} else {
    console.log('You have not been invited, I am sorry, go home.')
}