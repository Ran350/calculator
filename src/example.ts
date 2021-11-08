import { calculate } from "./calculator";

const formula = "1.3/(2+3*2-1.2)";
console.log(formula, "=", calculate(formula));
// -> 0.191176471
