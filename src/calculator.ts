import { Parser } from "./parser";

type Calculate = (formula: string) => number;
export const calculate: Calculate = (formula) => {
  return new Parser().expr(formula);
};
