import { Solution, MinStack } from "./design";

describe("Solution", () => {
  it("reset works", () => {
    const array = [1, 2, 3];
    const sol = new Solution(array);
    expect(sol.reset()).toEqual(array);
  });

  it("shuffles correctly", () => {
    const array = [1, 2, 3];
    const sol = new Solution(array);
    const shuffles = Array.from(Array(50), () => sol.shuffle().slice());
    expect(shuffles).toContainEqual([3, 2, 1]);
  });
});

describe("MinStack", () => {
  it("gets top of stack", () => {
    const stack = new MinStack();
    stack.push(10);
    expect(stack.top()).toEqual(10);
    stack.pop();
    expect(stack.top()).toEqual(undefined);
  });

  it("gets min of stack", () => {
    const stack = new MinStack();
    stack.push(3);
    stack.push(-1);
    stack.push(10);
    expect(stack.getMin()).toEqual(-1);
    stack.pop();
    stack.pop();
    expect(stack.getMin()).toEqual(3);
  });

  it("fixed bug", () => {
    const stack = new MinStack()
    stack.push(0)
    stack.push(1)
    stack.push(0)
    expect(stack.getMin()).toEqual(0)
    stack.pop()
    expect(stack.getMin()).toEqual(0)
});
