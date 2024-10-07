const sequence = { 0: 0, 1: 1, 2: 1 };

function fiboEvenSum(target, position = 3) {
  let fibonacci = sequence[position - 1] + sequence[position - 2];
  sequence[position] = fibonacci;
  if (fibonacci <= target) {
    return !(fibonacci % 2) ?
      fibonacci + fiboEvenSum(target, position + 1) : fiboEvenSum(target, position + 1);
  } else {
    return 0;
  }
}

console.log("Answer: " + fiboEvenSum(4000000));  // Answer: 4613732