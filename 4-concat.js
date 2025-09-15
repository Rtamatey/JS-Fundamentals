
const a = process.argv[2];
const b = process.argv[3];

if (a === undefined && b === undefined) {
  console.log('0 argument');
} else if (b === undefined) {
  console.log(a);
} else {
  console.log(a + ' ' + b);
}
