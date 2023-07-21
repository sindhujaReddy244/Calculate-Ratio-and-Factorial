const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  let resultOfRatio = ratioOfTwoNumbers(num1, num2);
  let resultOfFactorial = factorialOfNumber(num3);
  return { ratio: resultOfRatio, factorial: resultOfFactorial };
};
module.exports = ratioAndFactorial;
