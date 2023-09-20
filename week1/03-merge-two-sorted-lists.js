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
  console.log(head1, head2)
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
