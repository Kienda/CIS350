// window.alert('Hello, World!');

// // JavaScript variables
// let $num1 = 5;
// let $num2 = 10;
// let sum = $num1 + $num2;
// alert(sum);

// // using prompt
// var result = prompt("Enter your name: ");
// document.write("Hello, " + result + "!");

// // event
// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//   alert('Hello, World!');
// });

// //functions
// num1 = prompt("Enter first number: ");
// num2 = prompt("Enter second number: ");

// function sum($num1, $num2) {
//   return $num1 + $num2;
// }

// sum = sum(num1, num2);
// alert(sum);

// const fn = document.getElementById('fn').innerHTML = sum;

//using html
const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const result = document.getElementById('result');
const btn = document.getElementById('btn');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

//addition
btn.addEventListener('click', function () {
  const num1 = Number(operand1.value);
  const num2 = Number(operand2.value);
  const sum = num1 + num2;
  result.value = sum;
});
//subtraction 
btnSub.addEventListener('click', function () {
  const num1 = Number(operand1.value);
  const num2 = Number(operand2.value);
  const sum = num1 - num2;
  result.value = sum;
});
//multiplication
btnMul.addEventListener('click', function () {
  const num1 = Number(operand1.value);
  const num2 = Number(operand2.value);
  const sum = num1 * num2;
  result.value = sum;
});
//division
btnDiv.addEventListener('click', function () {
  const num1 = Number(operand1.value);
  const num2 = Number(operand2.value);
  const sum = num1 / num2;
  result.value = sum;
});






