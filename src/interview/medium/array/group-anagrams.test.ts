import { groupAnagrams, countChars, getHash } from "./group-anagrams";

describe("groupAnagrams", () => {
  it("handles single empty string input", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });

  it("handles char counting", () => {
    expect(countChars("foo")).toEqual({ f: 1, o: 2 });
  });

  it("hashes unique", () => {
    const obj1 = { f: 1, o: 2 };
    const obj2 = { o: 2, f: 1 };
    expect(getHash(obj1)).toEqual(getHash(obj2));
  });

  it("handles provided test", () => {
    const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["bat"], ["tan", "nat"], ["eat", "tea", "ate"]];
    const actual = groupAnagrams(strings);
    expect(actual).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(actual));
  });
});
