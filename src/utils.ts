/**
 * @description 小数点第n位で四捨五入して二進誤差をなくす
 */
export const round = (n: number) => {
  const significantFigure = 9;
  return Math.round(n * 10 ** significantFigure) / 10 ** significantFigure;
};
