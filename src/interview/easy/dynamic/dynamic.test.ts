import { climbStairs, maxProfit, maxSubArray } from "./dynamic";

describe("climbStairs", () => {
  it("works for one stair", () => {
    expect(climbStairs(1)).toEqual(1);
  });

  it("works for two stairs", () => {
    expect(climbStairs(2)).toEqual(2);
  });

  it("works for three stairs", () => {
    expect(climbStairs(3)).toEqual(3);
  });

  it("is fast enough for high inputs", async () => {
    climbStairs(45);
  });
});

describe("maxProfit", () => {
  it("does not buy falling stocks", () => {
    expect(maxProfit([4, 3, 2, 1])).toEqual(0);
  });

  it("does buy rising stocks", () => {
    expect(maxProfit([1, 2, 3, 4])).toEqual(3);
  });

  it("does not buy first time", () => {
    expect(maxProfit([2, 4, 1, 7])).toEqual(6);
  });
});

describe("maxSubArray", () => {
  it("works for one element", () => {
    const value = 100;
    expect(maxSubArray([100])).toEqual(100);
  });

  it("works for two elements", () => {
    expect(maxSubArray([1, 2])).toEqual(3);
  });

  it("works for single negative value", () => {
    expect(maxSubArray([-10])).toEqual(-10);
  });
});
