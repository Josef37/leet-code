import { TreeNode, isSymmetric, levelOrder, sortedArrayToBST } from "./trees";

describe("isSymmetric", () => {
  it("works for empty tree", () => {
    const root = null;
    expect(isSymmetric(root)).toBe(true);
  });

  it("works for single node tree", () => {
    const root = new TreeNode(0, null, null);
    expect(isSymmetric(root)).toBe(true);
  });

  it("works with only left nodes", () => {
    const root = new TreeNode(0, new TreeNode(1, null, null), null);
    expect(isSymmetric(root)).toBe(false);
  });

  it("works with only right nodes", () => {
    const root = new TreeNode(0, null, new TreeNode(1, null, null));
    expect(isSymmetric(root)).toBe(false);
  });

  it("works with full depth 2 tree", () => {
    const root = new TreeNode(
      0,
      new TreeNode(1, null, null),
      new TreeNode(1, null, null)
    );
    expect(isSymmetric(root)).toBe(true);
  });

  it("works for a depth 3 tree", () => {
    const root = new TreeNode(
      0,
      new TreeNode(1, null, new TreeNode(2, null, null)),
      new TreeNode(1, new TreeNode(2, null, null), null)
    );
    expect(isSymmetric(root)).toBe(true);
  });

  it("works for a depth 3 tree", () => {
    const root = new TreeNode(
      0,
      new TreeNode(1, null, new TreeNode(2, null, null)),
      new TreeNode(1, null, new TreeNode(2, null, null))
    );
    expect(isSymmetric(root)).toBe(false);
  });

  it("works with different values", () => {
    const root = new TreeNode(
      0,
      new TreeNode(1, null, null),
      new TreeNode(2, null, null)
    );
    expect(isSymmetric(root)).toBe(false);
  });
});

describe("levelOrder", () => {
  it("works for empty tree", () => {
    const root = null
    expect(levelOrder(root)).toEqual([])
  }

  it("works for single node tree", () => {
    const root = new TreeNode(0, null, null);
    expect(levelOrder(root)).toEqual([[0]]);
  });

  it("works for full depth 2 tree", () => {
    const root = new TreeNode(
      0,
      new TreeNode(1, null, null),
      new TreeNode(2, null, null)
    );
    expect(levelOrder(root)).toEqual([[0], [1,2]]);
  });
}

describe("sortedArrayToBST", () => {
  it("works for empty tree", () => {
    const nums = []
    const root = null
    expect(sortedArrayToBST(nums)).toEqual(root)
  }

  it("works for single node tree", () => {
    const nums = [0]
    const root = new TreeNode(0, null, null);
    expect(sortedArrayToBST(nums)).toEqual(root)
  });

  it("works for full depth 2 tree", () => {
    const nums = [0,1,2]
    const root = new TreeNode(
      1,
      new TreeNode(0, null, null),
      new TreeNode(2, null, null)
    );
    expect(sortedArrayToBST(nums)).toEqual(root)
  });
}