// Day 25
// ### Question 1: Calculate the Difference Between the Sum of Odd and Even Digits
// *Problem:* You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference between these two sums. The difference should be positive.
// *Example:*
// - Input: number = 1234
// - Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)
// *Hint:* Convert the number to a string, then check each digit to see if it’s odd or even, and calculate the respective sums.
// ---
function calculateDifference(num) {
    var oddSum = 0;
    var evenSum = 0;
    while (num > 0) {
        var digit = num % 10;
        if (digit % 2 === 0) {
            evenSum += digit;
        }
        else {
            oddSum += digit;
        }
        num = Math.floor(num / 10);
    }
    var difference = oddSum - evenSum;
    if (difference < 0) {
        difference = -difference;
    }
    return difference;
}
;
console.log(calculateDifference(1234)); // Output: 2
console.log(calculateDifference(56789)); // Output: 7
// ### Question 2: Find the Smallest Divisor of a Number (Greater than 1)
// *Problem:* You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.
// *Example:*
// - Input: number = 15
// - Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)
// *Hint:* Use a loop to check which number divides the integer without leaving a remainder, starting from 2 upwards.
function findSmallestDivisor(num) {
    for (var i = 2; i <= num; i++) {
        if (num % i === 0) {
            return i;
        }
    }
    return num;
}
;
console.log(findSmallestDivisor(15)); // Output: 3
console.log(findSmallestDivisor(21)); // Output: 3
console.log(findSmallestDivisor(29)); // Output: 29 
