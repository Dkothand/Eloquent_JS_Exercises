/***** Minimum *****/
/*
The previous chapter introduced the standard function Math.min that returns its smallest argument.
We can build something like that now. 
Write a function min that takes two arguments and returns their minimum.
*/

const min = (a, b) => a < b ? a : b
// console.log(min(3, 4))
// console.log(min(5, 4))


/***** Recursion *****/
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 
// Here’s another way to define whether a positive whole number is even or odd:

// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

const isEven = (num) => {
    if (num === 1 || num < 0) return false
    return num === 0 || isEven(num - 2)
}
// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))