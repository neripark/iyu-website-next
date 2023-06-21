const sampleFunction = (a: number) => {
  return a * 2;
};

// todo: テストファイル増えてきたら削除する
describe("sample", () => {
  test("2倍のテスト 1", () => {
    expect(sampleFunction(1)).toEqual(2);
  });
  test("2倍のテスト 2", () => {
    expect(sampleFunction(10)).toEqual(20);
  });
});
