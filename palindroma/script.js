// var prompt = prompt('Inserisci una parola')

// var splittedPrompt = prompt.split("")

// var reversedArray = splittedPrompt.reverse();

// var arrayJoinPrompt = reversedArray.join("");

// if (prompt == arrayJoinPrompt) {
//     alert('La parola è palindroma!')
// } else {
//     alert('La parola non è palindroma..')
// }
inputString = prompt('Inserisci una parola per sapere se è palindroma:');

function isPalindroma(inputString) {
    var splittedInput = inputString.split("")
    var reversedArray = splittedInput.reverse()
    var joinReversedArray = reversedArray.join("")
    if (inputString == joinReversedArray) {
        alert('La parola è palindroma!')
    } else {
        alert('La parola non è palindroma!')
    }

    return joinReversedArray;
}

console.log(inputString, isPalindroma(inputString));