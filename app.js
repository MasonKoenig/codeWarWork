function DNAStrand(dna) {
  const array = dna.split('');
  const newArray = array.map((x) => {
    if (x === 'A') return 'T';
    if (x === 'T') return 'A';
    if (x === 'G') return 'C';
    if (x === 'C') return 'G';
  });
  return newArray.join('');
}

console.log(DNAStrand('ATTGC'));
