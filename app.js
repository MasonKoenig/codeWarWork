function longest(s1, s2) {
  const array = (s1 + s2).split('');
  const uniqueArray = [...new Set(array)];
  return uniqueArray.sort().join('');
}

a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';
console.log(longest(a, b));
