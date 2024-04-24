/**
 * This program reverses a string.
 * 
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024-04-24
 */


// reverse the string using recursion
function reverseString(stringToReverse: string): string {
    if (stringToReverse === '') {
        return ''
    } else {
        let firstChar = stringToReverse[0]
        let restOfString: string = stringToReverse.slice(1)
        return reverseString(restOfString) + firstChar
    }
}

const aString = "recursion"
console.log(`The reverse of ${aString} is ${reverseString(aString)}`)

console.log("\nDone.")
