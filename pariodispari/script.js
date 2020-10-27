var userNum = parseInt(prompt('Scegli un numero da uno a cinque'));

var userChoice = prompt('Scegli pari o dispari?')


function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNum = randomNum(1, 5);

if (userChoice === 'pari' && userNum + randomNum % 2 == 0) {
    alert('Hai vinto!')
} else if (userChoice === 'dispari' && userNum + randomNum % 2 >= 1) {
    alert('Hai vinto!')
} else {
    alert('Hai perso!')
}

console.log(userNum, randomNum, userChoice)