import { Parser } from "./parser";
import { round } from "./utils";

type Calculate = (formula: string) => number;
export const calculate: Calculate = (formula) => {
  const result = new Parser().expr(formula);
  return round(result);
};
