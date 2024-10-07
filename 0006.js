function sumSquareDifference(target) {
  let sumOfSquare = 0, squareOfSum = 0;
  for (let number = 1; number < target + 1; number ++) {
    sumOfSquare += number ** 2;
    squareOfSum += number;
  }
  return squareOfSum ** 2 - sumOfSquare;
}

console.log("Answer: " + sumSquareDifference(100))  // Answer: 25164150

