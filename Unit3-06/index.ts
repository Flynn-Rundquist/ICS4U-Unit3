/**
 * This is the merge sort program.
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024-05-09
 */

// merge sort
function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr
    }

    // math.floor rounds down
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

// merge
function merge(left: number[], right: number[]): number[] {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    // concat combines arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// create random arrays with no repeats (lenth 50, 100, 200)
let arr50: number[] = []
let arr100: number[] = []
let arr200: number[] = []

// array of 50 random numbers
for (let counter = 0; counter < 50; counter++) {
    let num = Math.floor(Math.random() * 50)
    // make sure no numbers repeat
    if (!arr50.includes(num)) {
        arr50.push(num)
    }
}

// array of 100 random numbers
for (let counter = 0; counter < 100; counter++) {
    let num = Math.floor(Math.random() * 100)
    // make sure no numbers repeat
    if (!arr100.includes(num)) {
        arr100.push(num)
    }
}

// array of 200 random numbers
for (let counter = 0; counter < 200; counter++) {
    let num = Math.floor(Math.random() * 200)
    // make sure no numbers repeat
    if (!arr200.includes(num)) {
        arr200.push(num)
    }
}

// main
console.log("Original array of 50 random numbers: \n")
console.log(arr50.join(", "))
console.log("\nSorted array of 50 random numbers: \n")
console.log(mergeSort(arr50).join(", "))

console.log("\n**********\n")

console.log("Original array of 100 random numbers: \n")
console.log(arr100.join(", "))
console.log("\nSorted array of 100 random numbers: \n")
console.log(mergeSort(arr100).join(", "))

console.log("\n**********\n")
console.log("Original array of 200 random numbers: \n")
console.log(arr200.join(", "))
console.log("\nSorted array of 200 random numbers: \n")
console.log(mergeSort(arr200).join(", "))

console.log("\nDone.")