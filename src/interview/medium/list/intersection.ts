class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;

  const listARev = spreadList(headA).reverse();
  const listBRev = spreadList(headB).reverse();
  let i = 0;
  while (listARev[i] && listBRev[i] && listARev[i] === listBRev[i]) i++;

  return listARev[i - 1] || null;
}

function spreadList(head: ListNode | null): Array<ListNode> {
  const array = [];
  while (head) {
    array.push(head);
    head = head.next;
  }
  return array;
}

export { ListNode, getIntersectionNode };
