// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const validAnagram = (s1,s2) => {
  if (s1.length !== s2.length) return false;
  let count = {}

  for (let char of s1) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  console.log(count, 'count')

  for (let char of s2) {
    if (!char in count){
      return false;
    } else {
      count[char]--;
    }
  }

  for (let char in count) {
    if (count[char] !== 0) return false;
  }
  return true;
}


// Example 1:
let s = "anagram", t = "nagaram"
console.log(validAnagram(s,t))
// Output: true

// Example 2:
s = "rat", t = "car"
console.log(validAnagram(s,t))
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
