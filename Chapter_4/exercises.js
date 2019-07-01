/***** The Sum of a Range *****/
/*
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

const range = (start, end) => {
    // returns array of all numbers from start to end inclusive
    const rangeArray = []
    while (start <= end) {
        rangeArray.push(start)
        start++
    }
    return rangeArray
}
// console.log(range(1, 10))


const sum = (arr) => {
    // Solving with recursion
    if (arr.length === 0) return 0
    return arr[0] + sum(arr.slice(1))

    // Solving with for-loop
    // let sum = 0
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    // return sum
}

// console.log(sum(range(1, 10))) // logs 55


/*
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. 
*/

const bonusRange = (start, end, step = 1) => {
    // Only works when start < end and positive step
    const array = []
    for (let i = start; i <= end; i += step) {
        array.push(i)
    }
    return array
}

// console.log(bonusRange(1, 10, 2))
// console.log(bonusRange(5, 2, -1))


/***** Reversing an Array *****/
/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
Thinking back to the notes about side e ects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

const reverseArray = (arr) => {
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray
}
// console.log(reverseArray([1, 2, 3, 4, 5]))



const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))