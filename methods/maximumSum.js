const createZerosTriangle = require("./createZerosTriangle");

const maximumSum = (triangle) => {
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
        sums[k][i] = Math.max(currentValue + sums[k + 1][i + 1], currentValue + sums[k + 1][i])
      }
    }
  }
  sums.forEach(z=>console.log(z.join('\t')))
  return sums[0][0];
};

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true;
};


module.exports = maximumSum;
