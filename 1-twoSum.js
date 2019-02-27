// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const twoSum = (numbers, target) => {
  // input: array of numbers, target
  // output: an array of indices of the two numbers that sum to the target

  // Create an object to store the elements of the input array and their indices
  const map = {}

  // iterate through the numbers array
  for (let i = 0; i < numbers.length; i++) {
    // Find the difference between the current element and the target
    const diff = target - numbers[i]
    const n = map[diff]
    // Check if the index of the difference already exists in the map object
    if (n !== undefined) {
      // return the value and current index
      return [n, i]
    } else {
      // store the current element and it's index in the map object
      map[numbers[i]] = i
    }
  }
}

// O(n^2)
// const twoSum = (numbers, target) => {
//   // input: array of numbers, target
//   // output: an array of indices of the two numbers that sum to the target

//   const result = []
//   let sum
//   // iterate through the input array
//   for (let i = 0; i < numbers.length; i++) {
//     // for each element, calculate all possible sums
//     for (let j = i+1; j < numbers.length; j++) {
//       sum = numbers[i] + numbers[j]
//       // if the sum is equal to the target
//       if (sum === target) {
//         // store the indices
//         result.push(i, j)
//       }
//     }
//   }
//   return result
// }

const input = [2, 7, 11, 15]
const target = 17

console.log(twoSum(input, target))