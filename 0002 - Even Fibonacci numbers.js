const fibonacciSequence = {0: 0, 1: 1, 2: 1}

function EvenFinbonacciNumbers(position = 3, target = 4000000) {
  fibonacci = fibonacciSequence[position - 1] + fibonacciSequence[position - 2]
  fibonacciSequence[number] = fibonacci
  return fibonacci < target  ? !(fibonacci % 2) ? fibonacci + EvenFinbonacciNumbers(position + 1) : EvenFinbonacciNumbers(position + 1) : 0;
}

console.log("Answer: " + EvenFinbonacciNumbers())