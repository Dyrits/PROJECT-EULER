function isPrime(number) {
  if (number === 2) { return true; }
  else if (number < 2) { return false; }
  for (let testNumber = 2; testNumber < Math.sqrt(number) + 1; testNumber++) {
    if (!(number % testNumber)) { return false; }
  }
  return true;
}

function largestPrimeFactor(end) {
  // If the number is prime, we return it.
  if (isPrime(end)) { return end; }
  let largest = 2;
  for(let start = 3; start < Math.sqrt(end); start += 2) {
    if(isPrime(start) && !(end % start)) { largest = start; }
  }
  return largest;
}

console.log("Answer: " + largestPrimeFactor(600851475143));  // Answer: 6857