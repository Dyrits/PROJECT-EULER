const fibonacciSequence = {0: 0, 1: 1, 2: 1}

function evenFinbonacciNumbers(position = 3, target = 4000000) {
  fibonacci = fibonacciSequence[position - 1] + fibonacciSequence[position - 2]
  fibonacciSequence[position] = fibonacci
  return fibonacci < target  ? !(fibonacci % 2) ? fibonacci + evenFinbonacciNumbers(position + 1) : evenFinbonacciNumbers(position + 1) : 0;
}

console.log("Answer: " + evenFinbonacciNumbers())  // Answer: 4613732