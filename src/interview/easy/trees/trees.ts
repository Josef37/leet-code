/*
Some LeetCode Tree Interview Questions
https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  if (!root.left || !root.right) return false;
  return (
    root.left.val == root.right.val &&
    isSymmetric(new TreeNode(0, root.left.left, root.right.right)) &&
    isSymmetric(new TreeNode(0, root.left.right, root.right.left))
  );
}

function levelOrderRecursive(root: TreeNode | null): number[][] {
  const mergeLevels = (level: number[], index: number) => {
    levels[index + 1] = (levels[index + 1] || []).concat(level);
  };

  if (!root) return [];
  const levels = [[root.val]];
  if (root.left) {
    levelOrder(root.left).forEach(mergeLevels);
  }
  if (root.right) {
    levelOrder(root.right).forEach(mergeLevels);
  }
  return levels;
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue = [{ node: root, level: 0 }];
  const levels = [] as number[][];
  while (queue.length) {
    const { node, level } = queue.shift();
    levels[level] = (levels[level] || []).concat([node.val]);
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }
  return levels;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;

  const middleIndex = Math.floor(nums.length / 2);
  const leftNums = nums.slice(0, middleIndex);
  const middleNum = nums[middleIndex];
  const rightNums = nums.slice(middleIndex + 1);

  return new TreeNode(
    middleNum,
    sortedArrayToBST(leftNums),
    sortedArrayToBST(rightNums)
  );
}

export { TreeNode, isSymmetric, levelOrder, sortedArrayToBST };
