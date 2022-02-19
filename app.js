function SeriesSum(n) {
  let denominator = 1;
  let result = 0;
  if (n === 0) return '0.00';
  for (let i = 0; i < n; i++) {
    result += 1 / denominator;
    denominator += 3;
  }
  result = (Math.round(result * 100) / 100).toFixed(2);
  return result.toString();
}

console.log(SeriesSum(1));
console.log('0.00');
