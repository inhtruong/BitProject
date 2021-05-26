function calPerimeter (radius) {
    let result = Math.PI * 2 * radius; 
    return result;
}

function calAcreage (radius) {
    let result = Math.PI * radius * radius;
    return result;
}

let num = +prompt("Enter the value of Radius:");
let perimeter = calPerimeter(num);
let acreage = calAcreage(num)

console.log (`Bán kính đường tròn: ${num}`);
console.log (`Chu vi hình tròn là: ${perimeter}`);
console.log (`Diện tích hình tròn là: ${acreage}`);