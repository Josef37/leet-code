class Solution {
  private shuffled: number[];

  constructor(private nums: number[]) {
    this.shuffled = nums.slice();
  }

  reset(): number[] {
    return this.nums;
  }

  shuffle(): number[] {
    for (let i = this.shuffled.length - 1; i >= 0; i--) {
      const j = randInt(i);
      [this.shuffled[i], this.shuffled[j]] = [
        this.shuffled[j],
        this.shuffled[i]
      ];
    }
    return this.shuffled;
  }
}

/** @returns integer in [0, to] */
function randInt(to: number): number {
  return Math.floor(Math.random() * (to + 1));
}

class MinStack {
  private array: number[] = [];
  private mins: number[] = [];

  push(x: number): void {
    this.array.push(x);
    if (!this.mins.length || this.getMin() >= x) {
      this.mins.push(x);
    }
  }

  pop(): void {
    const top = this.array.pop();
    if (top === this.getMin()) {
      this.mins.pop();
    }
  }

  top(): number {
    return this.array[this.array.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}

export { Solution, MinStack };
