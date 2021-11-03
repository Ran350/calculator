type Bnf = (s: string) => number;

export class Parser {
  private i: number = 0;

  /**
   * @description 注目文字を1文字右へずらす
   */
  countUp = () => {
    this.i += 1;
  };

  /**
   * @description expr = term, {("+", term) | ("-", term)}
   * @param s
   * @returns 加算，減算の結果
   */
  expr: Bnf = (s) => {
    let res = this.term(s);

    while (this.i < s.length) {
      if (s[this.i] === "+") {
        this.countUp();
        res += this.term(s);
        continue;
      }

      if (s[this.i] === "-") {
        this.countUp();
        res -= this.term(s);
        continue;
      }
      return res;
    }
    return res;
  };

  /**
   * @description term = factor, {("*", factor) | ("/", factor) | ("(", factor)}
   * @param s
   * @returns 掛け算，割り算の結果
   */
  term: Bnf = (s) => {
    let res = this.factor(s);

    while (this.i < s.length) {
      if (s[this.i] === "*") {
        this.countUp();
        res *= this.factor(s);
        continue;
      }

      if (s[this.i] === "/") {
        this.countUp();
        res /= this.factor(s);
        continue;
      }

      if (s[this.i] === "(") {
        res *= this.factor(s);
        continue;
      }

      break;
    }
    return res;
  };

  /**
   * @description factor = ("(", expr, ")") | number
   * @param s
   * @returns
   */
  factor: Bnf = (s) => {
    if (s[this.i] != "(") {
      return this.num(s);
    }

    this.countUp();
    let res = this.expr(s);

    if (s[this.i] === ")") {
      this.countUp();
    }

    return res;
  };

  /**
   * @description 連続する0文字以上の数字を読み取る
   * @param s
   * @returns
   */
  num: Bnf = (s) => {
    let res = "";

    while (this.i < s.length && /[0-9]/.test(s[this.i])) {
      res += s[this.i];
      this.countUp();
    }

    return parseInt(res);
  };
}
