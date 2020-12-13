/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/
*/

const firstBadVersion = (isBadVersion: (version: number) => boolean) => (
  n: number
): number => {
  let [good, bad] = [0, n];
  while (bad - good > 1) {
    const middle = Math.floor((bad + good) / 2);
    if (isBadVersion(middle)) {
      bad = middle;
    } else {
      good = middle;
    }
  }
  return bad;
};

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let [i, j] = [m - 1, n - 1];
  while (i + j + 1 >= 0) {
    if (j < 0) break;
    else if (i < 0) nums1[i + j + 1] = nums2[j--];
    else nums1[i + j + 1] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
}

export { firstBadVersion, merge };
