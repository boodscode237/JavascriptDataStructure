// Creating and initializing an array

// let daysOfWeek = new Array()
// daysOfWeek = new Array(7)
// daysOfWeek = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday')

let daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

// console.log(daysOfWeek)
// console.log(daysOfWeek.length)

//Accessing elements and iterating an array

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i])
}

/*
* In mathematics, the Fibonacci numbers, commonly denoted Fn , form a sequence, the Fibonacci sequence,
* in which each number is the sum of the two preceding ones.
* The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 or sometimes
* (as did Fibonacci) from 1 and 2. Starting from 0 and 1, the first few values in the sequence are:[1]

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
* */

const fibonacci = []

fibonacci[1] = 1
fibonacci[2] = 1

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i - 2]
}

for (let i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i])
}

// Adding elements to an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// adding at the end of the array
numbers.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19)

// adding at the beginning of the array

numbers.unshift(0, -1, -2, -3)
console.log(numbers)


// REMOVING ELEMENTS

// removing from the end of the array

console.log(numbers.pop())

// removing from the beginning of the array

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1] // this method doesn't will return an array with the same length and last elements 'undefined'
}

// a better solution is to copy to a new array and reindex the array

Array.prototype.reindex = function (myArray) {
    const newArray = []
    for (let i = 0; i < myArray.length; i++){
        if(myArray[i] != undefined){
            newArray.push(myArray[i])
        }
    }
    return newArray
}
// remove manually and reindex

Array.prototype.removeFirstPosition = function () {
    for (let i = 0; i < this.length; i++){
        this[i] = this[i + 1]
    }
    return this.reindex(this)
}

numbers = numbers.removeFirstPosition()
console.log(numbers)

// using shift to remove from the beginning

numbers.shift()

// remove from a specific position with the splice method
console.log(numbers.length)
console.log(numbers.splice(5, 5))

console.log(numbers.splice(18, 0, 21, 22, 23, 24))
console.log(numbers)


// TWO DIMENSIONAL AND MULTIDIMENSIONAL ARRAYS
let averageTemps = []
averageTemps[0] = [72, 75, 79, 79, 81, 81]
averageTemps[1] = [81, 79, 75, 75, 73, 72]

//Iterating the elements of two-dimensional arrays

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

console.log(printMatrix(averageTemps))

// Multi-dimensional arrays

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []; // we need to initialize each array
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}
console.log(matrix3x3x3)


for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

// Joining multiple arrays
const zero = 0
const positiveNumbers = [1, 2, 3, 4, 5]
const negativeNumbers = [-5, -4, -3, -2, -1]
let allNumbers = negativeNumbers.concat(zero, positiveNumbers)
console.log(allNumbers)