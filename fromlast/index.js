// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slowPt = list.head;
  let fastPt = list.head;
  
  for (let i = 0; i < n; i++) {
    fastPt = fastPt.next;
  }

  while (fastPt && fastPt.next) {
    fastPt = fastPt.next;
    slowPt = slowPt.next;
  }

  return slowPt;
}

module.exports = fromLast;
