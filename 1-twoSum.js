// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const twoSum = (numbers, target) => {
  const map = {}

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i]
    const n = map[diff]
    if (n !== undefined) {
      return [n, i]
    } else {
      map[numbers[i]] = i
    }
  }
}

const input = [2, 7, 11, 15]
const target = 17

console.log(twoSum(input, target))