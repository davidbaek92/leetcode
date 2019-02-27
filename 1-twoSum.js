// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const map = {}

const twoSum = (numbers, target) => {
  // input: array of numbers, target
  // output: an array of indices of the two numbers that sum to the target

  const result = []

  // iterate through the numbers array
    // Find the difference between the current number and the target
}

const twoSum = (numbers, target) => {
  // input: array of numbers, target
  // output: an array of indices of the two numbers that sum to the target

  const result = []
  let sum
  // iterate through the input array
  for (let i = 0; i < numbers.length; i++) {
    // for each element, calculate all possible sums
    for (let j = i+1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j]
      // if the sum is equal to the target
      if (sum === target) {
        // store the indices
        result.push(i, j)
      }
    }
  }
  return result
}

const input = [2, 7, 11, 15]
const target = 17

console.log(twoSums(input, target))