/**
 * This program finds the factorial of a number.
 * 
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024-04-25
 */

import { createPrompt } from 'bun-promptx'

// calculate the factorial of a number using recursion
function factorial(num: number): number {
    if (num == 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

// get user input
const userInput = createPrompt("Enter a number to find the factorial of: ")
let inputNumber = parseInt(userInput.value)

if (inputNumber < 0) {
    console.log("\n-1")
} else {
    console.log(`\n${factorial(inputNumber)}`)
}

console.log("\nDone.")