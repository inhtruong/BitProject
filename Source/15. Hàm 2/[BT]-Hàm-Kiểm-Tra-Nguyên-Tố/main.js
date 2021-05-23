let numberToCheck = parseInt(prompt("Enter the number to check:"));
let arrIsPrime = [];
let result;
function isPrimeAll(arr) {
  for (let num = 1; num <= 10000; num++) {
    let check = true;
    if (num < 2) {
      check = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          check = false;
        }
      }
    }
    if (check) {
      arr.push(num);
    }
  }
}

// Tạo mảng tất cả các số nguyên tố

function isPrime(number) {
  isPrimeAll(arrIsPrime);
  if (number < 0 || number > 10000) {
    result = "Số không hợp lệ!";
  }else if (arrIsPrime.indexOf(number) != -1) {
    result = `Số ${number} là số nguyên tố`;
  } else {
    result = `Số ${number} không phải là số nguyên tố`;
  }
  document.write(result);
}

isPrime(numberToCheck);
