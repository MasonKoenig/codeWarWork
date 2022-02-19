function highAndLow(numbers) {
  const array = numbers.split(' ');
  array.sort(function (a, b) {
    return a - b;
  });
  return `${array[array.length - 1]} ${array[0]}`;
}

console.log(highAndLow('1 2 3 4 5'));
