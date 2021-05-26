function testZero (number) {
    if (number === 0) {
        return "TRUE";
    } else {
        return "FALSE";
    }
}

let num = parseInt(prompt("Enter the value of number"));
let test = testZero(num);

document.write (`Giá trị vừa nhập là ${num} <br>`);
document.write (`Kết quả: ${test}`);