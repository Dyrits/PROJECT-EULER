const fibonacciSequence = {0: 0, 1: 1, 2: 1}

function evenFinbonacciNumbers(target, position = 3) {
  let fibonacci = fibonacciSequence[position - 1] + fibonacciSequence[position - 2]
  fibonacciSequence[position] = fibonacci
  if (fibonacci < target ) {
    return !(fibonacci % 2) ?
      fibonacci + evenFinbonacciNumbers(target, position + 1) : evenFinbonacciNumbers(target, position + 1);
  } else { return 0; }
}

console.log("Answer: " + evenFinbonacciNumbers(4000000))  // Answer: 4613732