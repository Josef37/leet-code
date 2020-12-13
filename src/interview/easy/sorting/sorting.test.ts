import { firstBadVersion, merge } from "./sorting";

describe("firstBadVersion", () => {
  it("works for n=1", () => {
    const isBadVersion = () => true;
    expect(firstBadVersion(isBadVersion)(1)).toEqual(1);
  });

  it("works for n=2 bad=1", () => {
    const isBadVersion = (version: number) => true;
    expect(firstBadVersion(isBadVersion)(2)).toEqual(1);
  });

  it("works for n=2 bad=2", () => {
    const isBadVersion = (version: number) => version >= 2;
    expect(firstBadVersion(isBadVersion)(2)).toEqual(2);
  });

  it("works for n=2^30 bad=2^29", () => {
    const isBadVersion = (version: number) => version >= 2 ** 29;
    expect(firstBadVersion(isBadVersion)(2 ** 30)).toEqual(2 ** 29);
  });
});

describe("merge", () => {
  it("works for empty arrays", () => {
    const nums1 = [];
    const nums2 = [];
    merge(nums1, 0, nums2, 0);
    expect(nums1).toEqual([]);
  });

  it("works for one-element arrays", () => {
    const nums1 = [1, 0];
    const nums2 = [2];
    merge(nums1, 1, nums2, 1);
    expect(nums1).toEqual([1, 2]);
  });

  it("works for three-element arrays", () => {
    const nums1 = [1, 3, 5, 0, 0, 0];
    const nums2 = [2, 4, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("works for negative numbers", () => {
    const nums1 = [-1, 3, 0, 0];
    const nums2 = [-3, 0];
    merge(nums1, 2, nums2, 2);
    expect(nums1).toEqual([-3, -1, 0, 3]);
  });
});
