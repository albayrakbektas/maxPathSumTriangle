const createZerosTriangle = (triangle) => {
  let sum = [];
  for (let i = 0; i < triangle.length; ++i) {
    sum[i] = [];
    for (let j = 0; j < triangle[i].length; ++j) {
      sum[i][j] = 0;
    }
  }
  return sum;
};

module.exports = createZerosTriangle;
