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
        square[index] = counter + 1

        if (index < 8) {
            findMagicSquares(square, index + 1)
        } else {
            if (isMagicSquare(square)) {
                numOfSquares++
                printSquare(square)
            }
        }
    }
}

// set magicNumber sum
let numProcess = 0
let numOfSquares = 0

// check if array is a magic square
function isMagicSquare(preSquare: number[]) {
    const row1 = preSquare[0] + preSquare[1] + preSquare[2]
    const row2 = preSquare[3] + preSquare[4] + preSquare[5]
    const row3 = preSquare[6] + preSquare[7] + preSquare[8]
    const col1 = preSquare[0] + preSquare[3] + preSquare[6]
    const col2 = preSquare[1] + preSquare[4] + preSquare[7]
    const col3 = preSquare[2] + preSquare[5] + preSquare[8]
    const diag1 = preSquare[0] + preSquare[4] + preSquare[8]
    const diag2 = preSquare[2] + preSquare[4] + preSquare[6]
    const magicSum = 15
    return (
        row1 == magicSum &&
        row2 == magicSum &&
        row3 == magicSum &&
        col1 == magicSum &&
        col2 == magicSum &&
        col3 == magicSum &&
        diag1 == magicSum &&
        diag2 == magicSum
    )
}

// print square
function printSquare(outputSquare: number[]) {
    console.log("\n*****")

    for (let count = 0; count < outputSquare.length; count++) {
        if (count % 3 == 0 && count != 0) {
            console.log()
        }
        console.log(outputSquare[count])
    }
    console.log("\n*****")
}

// initialise array
const square: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log("Magic Squares\n")
findMagicSquares(square, 0)
console.log("\nDone")
