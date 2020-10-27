var userNum = parseInt(prompt('Scegli un numero da uno a cinque'));
var userChoice = prompt('Scegli pari o dispari?').toLowerCase();
var computerNum = randomNum(1, 5);
var somma = userNum + computerNum;

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEvenOrOdd(somma) {
    if (somma % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

var isEvenOrOddSum = isEvenOrOdd(somma)

if (userChoice == isEvenOrOddSum) {
    alert('Hai vinto!')
} else {
    alert('Hai perso!')
}


console.log(isEvenOrOddSum)

console.log(userNum, randomNum, userChoice)