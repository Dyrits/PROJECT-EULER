// RECURSIVE SOLUTION:
function multiplesOf3Or5(number, step$3 = 3, step$5 = 5, result = 0) {
  result += step$5 < number && step$5 % 3 ? step$5 : 0;
  return step$3 < number ? step$3 + multiplesOf3Or5(number, step$3 + 3, step$5 + 5, result) : result;
}

/*

// ALTERNATIVE WITH A SINGLE WHILE LOOP:
function multiplesOf3Or5(number, step3 = 0, step5 = 0, result = 0) {
  while (step3 < number) {
    result += (step3 += 3)  < number ? step3 : 0;
    result += (step5 += 5) % 3 && step5 < number ? step5 : 0;
  }
  return result;
}

// CLASSIC ALTERNATIVE WITH TWO FOR LOOPS:
function multiplesOf3Or5(number) {
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

console.log("Answer: " + multiplesOf3Or5(19564));  // Answer: 233168