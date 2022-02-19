var isSquare = function (n) {
  const root = Math.sqrt(n);
  return root % 1 === 0;
};

console.log(isSquare(8));
