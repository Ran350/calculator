import { calculate } from "../calculator";

test("test calculate()", () => {
  // 四則演算ができる
  expect(calculate("1+1")).toBe(2);
  expect(calculate("1-1")).toBe(0);
  expect(calculate("1*2")).toBe(2);
  expect(calculate("4/2")).toBe(2);

  // * / が優先される
  expect(calculate("1*2+3")).toBe(5);
  expect(calculate("1+2*3")).toBe(7);
  expect(calculate("4/2+3")).toBe(5);
  expect(calculate("3+4/2")).toBe(5);

  // () が * / より優先される
  expect(calculate("2*(2+3)")).toBe(10);
  expect(calculate("2(2+3)")).toBe(10);
  expect(calculate("(1+2)*3")).toBe(9);

  // 2桁以上の項にも対応する
  expect(calculate("2+100(3+4*5)")).toBe(2302);

  // expect(calculate("")).toBe();
});
