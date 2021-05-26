function calFactorial (num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
}

let num = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let factorial = calFactorial(num);
console.log (`Giá trị được nhập vào: ${num}`);
console.log (`Lũy thừa của giá trị đó: ${factorial}`);