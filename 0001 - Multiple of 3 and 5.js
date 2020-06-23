// RECURSIVE SOLUTION:
function multiplesOf3and5(number, step3 = 3, step5 = 5, result = 0) {
  result += step5 < number && step5 % 3 ? step5 : 0;
  return step3 < number ? step3 + multiplesOf3and5(number, step3 + 3, step5 + 5, result) : result;
}

/*

// ALTERNATIVE WITH A SINGLE WHILE LOOP:
function multiplesOf3and5(number, step3 = 0, step5 = 0, result = 0) {
  while (step3 < number) {
    result += (step3 += 3)  < number ? step3 : 0;
    result += (step5 += 5) % 3 && step5 < number ? step5 : 0;
  }
  return result;
}

// CLASSIC ALTERNATIVE WITH TWO FOR LOOPS:
function multiplesOf3and5(number) {
  let result = 0;
  for (let step3 = 3; step3 < number; step3 += 3) {
    result += step3;
  }
  for (let step5 = 5; step5 < number; step5 += 5) {
    result += step5 % 3 ? step5 : 0;
  }
  return result;
}

 */

console.log("Answer: " + multiplesOf3and5(1000));  // Answer: 233168