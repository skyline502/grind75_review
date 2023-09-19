//Valid Parenthesis

/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
Accepted
3,774,397
Submissions
9,394,414

*/

const isValid = s => {
  let stack = []

  let brackets = {
    '(': ')',
    '[': ']',
    '{':'}'
  }

  for (let bracket of s) {
    if (bracket in brackets) {
      stack.push(bracket)
    } else {
      let end = stack[stack.length - 1]
      if (brackets[end] === bracket) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")) //true
console.log(isValid("()[]{}"))//true
console.log(isValid("(]"))//false
