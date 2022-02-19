function repeatStr(n, s) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(s);
  }
  return array.join('');
}

console.log(repeatStr(3, 'nm'));
