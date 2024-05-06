/**
 * This is the magic square program.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024-05-06
 */

import { createPrompt } from 'bun-promptx'

// get user input
const userInput = createPrompt("Enter the sum of the magic square: ")
let inputNumber = parseInt(userInput.value)

// check if array is a magic square
function isMagicSquare(square: number[]) {
    const row1 = square[0] + square[1] + square[2]
    const row2 = square[3] + square[4] + square[5]
    const row3 = square[6] + square[7] + square[8]
    const col1 = square[0] + square[3] + square[6]
    const col2 = square[1] + square[4] + square[7]
    const col3 = square[2] + square[5] + square[8]
    const diag1 = square[0] + square[4] + square[8]
    const diag2 = square[2] + square[4] + square[6]
    const diag3 = square[0] + square[3] + square[6]

    if (row1 == inputNumber && row2 == inputNumber && row3 == inputNumber
        && col1 == inputNumber && col2 == inputNumber && col3 == inputNumber
        && diag1 == inputNumber && diag2 == inputNumber && diag3 == inputNumber) {
        return true
    } else {
        return false
    }
}

// find all magic squares
function findMagicSquares() {
    
}