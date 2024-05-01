/**
 * This is the binary search program.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024-05-01
 */

import { createPrompt } from 'bun-promptx'

// binary search function
function binarySearch(userArray: Array<number>, userNum: number, lowIndex: number, hihgIndex: number) {
    // find midInex, Math.floor rounds down
    let midIndex = Math.floor((lowIndex + hihgIndex) / 2)

    // check if the number is found
    if (userArray[midIndex] == userNum) {
        return midIndex
    } else if (userArray[midIndex] < userNum) {
        return binarySearch(userArray, userNum, midIndex + 1, hihgIndex)
    } else if (userArray[midIndex] > userNum) {
        return binarySearch(userArray, userNum, lowIndex, midIndex - 1)
    } else {
        return -1
    }
}

// initialise array
const userArray: number[] = []

// add numbers to array
for (let counter = 0; counter < 250; counter++) {
    userArray[counter] = Math.floor(Math.random() * 999)
}

// sort the array
userArray.sort((a, b) => a - b)
console.log(`Sorted list of numbers:`)

// print the array, with the numbers separated by commas
console.log(userArray.join(", "))

// get user input
const userInput = createPrompt("\nWhat number are you searching for (integer between 0 and 999): ")
let inputNumber = parseInt(userInput.value)

// make sure the user input a number in the right range
if (inputNumber < 0 || inputNumber > 999) {
    console.log("\n-1")
    process.exit()
}

// search for the number
let searchResult = binarySearch(userArray, inputNumber, 0, userArray.length - 1)
console.log(`\nYour number is in index: ${searchResult}`)

console.log("\nDone.")
