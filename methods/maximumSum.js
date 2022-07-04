const createZerosTriangle = require("./createZerosTriangle");

const maximumSum = (triangle) => {
  if (
    triangle === undefined ||
    triangle.length === 0 ||
    triangle[0].length === 0 ||
    isPrime(triangle[0][0])
  ) {
    return 0;
  }
  let sums = createZerosTriangle(triangle);
  for (let k = triangle.length - 1; k >= 0; --k) {
    let currentLine = triangle[k];
    for (let i = 0; i < currentLine.length; i++) {
      let currentValue = currentLine[i];
      if (isPrime(currentValue)) {
        sums[k][i] = 0;
      } else if (k === triangle.length - 1) {
        sums[k][i] = currentLine[i];
      } else {
        if (i !== 0) {
          sums[k][i] = Math.max(
            sums[k][i],
            currentValue + sums[k + 1][i - 1]
          );
        }
        sums[k][i] = Math.max(
          sums[k][i],
          currentValue + Math.max(sums[k + 1][i], sums[k + 1][i + 1])
        );
      }
    }
  }
  return sums[0][0];
};

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num !== 1;
};


module.exports = maximumSum;
