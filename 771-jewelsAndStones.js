// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

const numJewelsInStones = (j, s) => {
  let count = 0
  for (let i = 0; i < j.length; i++) {
    for (let y = 0; y < s.length; y++) {
      if (j[i] === s[y]) {
        count++
      }
    }
  }
  return count
}

j = "aA"
s = "aAAbbb"

console.log(numJewelsInStones(j, s))