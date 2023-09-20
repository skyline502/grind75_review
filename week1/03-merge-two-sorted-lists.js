// 21. Merge Two Sorted Lists
// Easy

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const mergeTwoSortedLists = (head1, head2) => {
  if (!head1 && !head2) return null
  if (!head1) return head2
  if (!head2) return head1

  let start
  let h1 = head1
  let h2 = head2

  if (h1.val < h2.val) {
    start = h1
    h1 = head1.next
  } else {
    start = h2
    h2 = head2.next
  }

  let current = start

  while (h1 !== null && h2 !== null) {
    if (h1.val < h2.val) {
      current.next = h1
      h1 = h1.next
    } else {
      current.next = h2
      h2 = h2.next
    }

    current = current.next
  }

  if (!h1) {
    current.next = h2
  } else {
    current.next = h1
  }

  return start
}

//examples

const a = new Node(1)
const b = new Node(2)
const c = new Node(4)

a.next = b
b.next = c

const d = new Node(1)
const e = new Node(3)
const f = new Node(4)

d.next = e
e.next = f

console.log(mergeTwoSortedLists(a, d))//=>[1, 1, 2, 3, 4, 4]
console.log(mergeTwoSortedLists(null, null)) //=> null
console.log(mergeTwoSortedLists(null, new Node(0))) //=> [0]
