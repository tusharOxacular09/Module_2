let callPoints = function (operations) {
  let sum = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      // Ensure that there are at least two previous scores before performing the addition
      if (i >= 2) {
        let currentSum = operations[i - 2] + operations[i - 1];
        operations[i] = currentSum;
        sum += currentSum;
      }
    } else if (operations[i] === "D") {
      let newD = operations[i - 1] * 2;
      operations[i] = newD;
      sum += newD;
    } else if (operations[i] === "C") {
      let removedScore = operations.splice(i - 1, 2);
      i = i - 2;
      sum -= removedScore[0];
    } else {
      let integer = +operations[i];
      operations[i] = integer;
      sum += integer;
    }
  }

  return sum;
};
