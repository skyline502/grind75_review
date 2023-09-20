// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const isValidPalindrome = s => {
  //remove spaces
  //convert all to lowercase
  //remove all non alphanumeric characters
  let alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let converted = ''

  for (let char of s) {
    if (alphanumeric.includes(char.toLowerCase())) {
      converted += char.toLowerCase();
    }
  }

  if (s.length === 1) {
    return true
  }

  let start = 0;
  let end = converted.length - 1

  while (start <= end) {
    if (converted[start] === converted[end]) {
      start++
      end--
    } else {
      return false
    }
  }

  return true
}


// Example 1:

let s = "A man, a plan, a canal: Panama"
console.log(isValidPalindrome(s))
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

s = "race a car"
console.log(isValidPalindrome(s))
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

s = " "
console.log(isValidPalindrome(s))
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
