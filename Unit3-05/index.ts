/**
 * This is the magic square program.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024-05-07
 */

// find all magic squares
function findMagicSquares(square: number[], index: number) {
    for (let counter = 0; counter < 9; counter++) {
        numProcess++
        square[index] = counter

        if (index < 8) {
            findMagicSquares(square, index + 1)
        } else {
            if (isMagicSquare(square) == true) {
                numOfSquares++
                printSquare(square)
            }
        }
    }
}

// set magicNumber sum
const magicSum = 15
let numProcess = 0
let numOfSquares = 0

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

    return (
        row1 === magicSum &&
        row2 === magicSum &&
        row3 === magicSum &&
        col1 === magicSum &&
        col2 === magicSum &&
        col3 === magicSum &&
        diag1 === magicSum &&
        diag2 === magicSum
    )
}

// print square
function printSquare(outputSquare: number[]) {
    console.log("\n*****")

    for (let count = 0; count < outputSquare.length; count++) {
        if (count === 3 || count === 6) {
            console.log()
            console.log(outputSquare[count] + " ")
        } else {
            console.log(outputSquare[count] + " ")
        }
    }
}

// main
let magicSquare: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
findMagicSquares(magicSquare, 0);
console.log("\nNumber of processes: " + numProcess);
console.log("\nDone")
