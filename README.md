# 電卓



## 仕様
- `+ - * / ( )` を用いた四則演算を行う

### 制約
- これらの演算子と数字以外の文字列 (スペースなど) は入力されないものとする
- 演算子の優先順位は実際の四則演算と同様に，掛け算と割り算が優先される
- 入力数は 0 以上の整数のみとする
- `12(3+4)` のような，`(`横に`*`が省略された記法にも対応する
- 小数の演算にも対応する
- 答えが小数になる計算では小数第9位までを答えとする

### 例
| 入力        | 出力 |
| ----------- | ---- |
| 2+6/3*(6-4) | 6    |


## 内部仕様
[再帰下降構文解析](https://ja.wikipedia.org/wiki/%E5%86%8D%E5%B8%B0%E4%B8%8B%E9%99%8D%E6%A7%8B%E6%96%87%E8%A7%A3%E6%9E%90)
を用いる．

### 拡張BNF
```
expr ::= ("+"|"-")?, term, [ ("+", term) | ("-", term) ]*
term ::= factor, [ ("*", factor) | ("/", factor) | ("(", factor) ]*
factor ::= ( "(", expr, ")" ) | number
number ::= 1つ以上の数字
```

## 実行
```
git clone <this repo>
cd <this repo>
ts-node src/example.ts
```

## 参考
- [構文解析 - アルゴリズム講習会](https://dai1741.github.io/maximum-algo-2012/docs/parsing/)
- [Java 再帰下降構文解析 超入門 - Qiita](https://qiita.com/7shi/items/64261a67081d49f941e3)
- [pythonで再帰下降構文解析入門 - Qiita](https://qiita.com/kRysTasis/items/77a4b4e6214646a079ed#%E5%9B%9B%E5%89%87%E6%BC%94%E7%AE%97%E3%81%A7%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B)
