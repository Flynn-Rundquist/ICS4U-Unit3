/**
 * This function finds the palindrome depth of all
 * two digit numbers.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024-05-10
 */


// finds palindrome depth using recursion
function findDepth(userInput: number, depth: number = 0) {
    if (userInput == reverseNumber(userInput)) {
        return depth
    } else {
        return findDepth(userInput + reverseNumber(userInput), depth + 1)
    }
}

// reverses the number
function reverseNumber(numberTest: number) {
    let reversedNumber = 0
    while (numberTest > 0) {
        reversedNumber = reversedNumber * 10 + numberTest % 10
        numberTest = Math.floor(numberTest / 10)
    }
    return reversedNumber
}

// find depth of all 2 digit numbers
for (let counter = 10; counter < 100; counter++) {
    console.log(`\nThe depth of ${counter} is ${findDepth(counter)}`)
}

console.log("\nDone")