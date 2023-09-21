// 226. Invert Binary Tree
// Easy

// Given the root of a binary tree, invert the tree, and return its root.

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const invertTree = root => {
  if (root === null) {
    return root
  }

  invertTree(root.left)
  invertTree(root.right)

  let current = root.left
  root.left = root.right
  root.right = current

  return root

}

// Example 1:


// Input: root = [4,2,7,1,3,6,9]

const a = new Node(4)
const b = new Node(2)
const c = new Node(7)
const d = new Node(1)
const e = new Node(3)
const f = new Node(6)
const g = new Node(9)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

console.log(invertTree(a))

/*
          4
        /   \
       2     7
      / \   / \
     1  3  6   9
*/
// Output: [4,7,2,9,6,3,1]
/*
          4
        /   \
       7     2
      / \   / \
     9  6  3   1

*/
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []


// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
