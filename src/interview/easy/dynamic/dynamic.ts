function climbStairsOld(n: number): number {
  const lookup = [1, 1];

  const climbStairsDynamic = (n: number): number => {
    if (n in lookup) return lookup[n];
    lookup[n] = climbStairsDynamic(n - 1) + climbStairsDynamic(n - 2);
    return lookup[n];
  };

  return climbStairsDynamic(n);
}

function climbStairs(n: number): number {
  let [l, r] = [1, 1];
  for (let i = 2; i <= n; i++) {
    [l, r] = [r, l + r];
  }
  return r;
}

function maxProfit(prices: number[]): number {
  let maxPrice = -Infinity;
  let maxProfit = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    const price = prices[i];
    maxPrice = Math.max(price, maxPrice);
    maxProfit = Math.max(maxProfit, maxPrice - price);
  }
  return maxProfit;
}

function maxSubArray(nums: number[]): number {
  let maxInside = -Infinity;
  let maxBorder = -Infinity;
  for (const num of nums) {
    maxInside = Math.max(maxInside, maxBorder);
    maxBorder = Math.max(maxBorder + num, num);
  }
  return Math.max(maxInside, maxBorder);
}

function rob(nums: number[]): number {
  let withLastMax = 0;
  let withoutLastMax = 0;
  for (const num of nums) {
    const temp = withoutLastMax + num;
    withoutLastMax = Math.max(withLastMax, withoutLastMax);
    withLastMax = temp;
  }
  return Math.max(withoutLastMax, withLastMax);
}

export { climbStairs, maxProfit, maxSubArray, rob };
