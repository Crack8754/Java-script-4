function greet(name) {
  return `Привіт, ${name}!`;
}
console.log(greet("Сергій"));


function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(1)); 
console.log(factorial(2)); 
console.log(factorial(3)); 
console.log(factorial(4)); 
console.log(factorial(5)); 


function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven(6)); 
console.log(isEven(3)); 
console.log(isEven(8)); 


function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(4, 2)); 
console.log(power(5, 2)); 
console.log(power(3, 4)); 
console.log(power(6, 2)); 


function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Привіт")); 
console.log(reverseString("Friday")); 


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([6, 1, -12, 10, 5])); 
console.log(sumArray([11, -6, 9])); 


function calculateRectangleArea(width, height) {
    return width * height;
}

let area1WithFunction = calculateRectangleArea(7, 12);
console.log("Площа першого прямокутника з функцією: " + area1WithFunction);

let area2WithFunction = calculateRectangleArea(4, 16);
console.log("Площа другого прямокутника з функцією: " + area2WithFunction);

let area3WithFunction = calculateRectangleArea(5, 6);
console.log("Площа третього прямокутника з функцією: " + area3WithFunction);


function formatMessage(message, symbol) {
    return symbol + message + symbol;
}

let formattedMessage1WithFunction = formatMessage("Привіт!", "*");
console.log(formattedMessage1WithFunction);

let formattedMessage2WithFunction = formatMessage("Доброго дня!", "*");
console.log(formattedMessage2WithFunction);

let formattedMessage3WithFunction = formatMessage("Допобачення!", "*");
console.log(formattedMessage3WithFunction);


function checkAge(age) {
    if (age >= 18) {
        return "Користувач повнолітній";
    } else {
        return "Користувач неповнолітній";
    }
  }

let result1 = checkAge(24);
console.log(result1); 

let result2 = checkAge(14);
console.log(result2); 

let result3 = checkAge(18);
console.log(result3); 