function sumMul(n, m) {
  if (n >= m) return 'INVALID';
  const array = [n];
  for (let i = 0; n <= m; i++) {
    array.push(n);
    n += array[0];
  }
  array.shift();
  return array.reduce((a, b) => a + b);
}

console.log(sumMul(2, 9));
