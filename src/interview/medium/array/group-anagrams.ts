import _ from "lodash";

export function groupAnagrams(strs: string[]): string[][] {
  const groups = {};
  for (const str of strs) {
    const hash = str.split("").sort().join("");
    groups[hash] = (groups[hash] || []).concat(str);
  }
  return Object.values(groups);
}

export function groupAnagramsOld(strs: string[]): string[][] {
  const groups = {};
  for (const str of strs) {
    const charCount = countChars(str);
    const hash = getHash(charCount);
    groups[hash] = (groups[hash] || []).concat(str);
  }
  return _.values(groups);
}

export function countChars(str: string): Record<string, number> {
  const counts = {};
  for (const char of str) {
    counts[char] = 1 + (counts[char] || 0);
  }
  return counts;
}

export function getHash(obj: Record<string, number>): string {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
