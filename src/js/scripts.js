// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  // This is where the code you're actually experimenting with goes.

  numTotal = await input("Please input number: ");

if (numTotal > 0) {

numTotal = Number(numTotal);
numDivide = await input("Please input divided number: ");
numDivide = Number(numDivide);
numGroups = numTotal / numDivide;
output(numGroups);
numRemain = numTotal % numDivide;
output("The remainder is " + numRemain);
}
else {
output("Invalid input. Please try again.");
}
}
