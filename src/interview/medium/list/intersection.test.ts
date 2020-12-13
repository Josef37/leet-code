import { getIntersectionNode, ListNode } from "./intersection";

describe("getIntersectionNode", () => {
  it("works for empty Lists", () => {
    expect(getIntersectionNode(null, null)).toEqual(null);
  });

  it("works for one empty Lists", () => {
    const list = new ListNode();
    expect(getIntersectionNode(list, null)).toEqual(null);
  });

  it("works for weird example", () => {
    const tail = new ListNode(8, new ListNode(4, new ListNode(5, null)));
    const list1 = new ListNode(4, new ListNode(1, tail));
    const list2 = new ListNode(5, new ListNode(6, new ListNode(1, tail)));
    expect(getIntersectionNode(list1, list2)).toBe(tail);
  });

  it("works for equal lists", () => {
    const list = new ListNode(0, new ListNode(1));
    expect(getIntersectionNode(list, list)).toEqual(list);
  });
});
