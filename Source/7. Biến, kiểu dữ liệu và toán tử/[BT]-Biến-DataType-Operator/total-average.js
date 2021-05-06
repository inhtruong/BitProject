let inputPhysics;
let inputChemistry;
let inputBiology;

inputPhysics = prompt("Điểm Vật lý");
inputChemistry = prompt("Điểm Hóa học");
inputBiology = prompt("Điểm Sinh học");

let Phy = parseFloat(inputPhysics);
let Chem = parseFloat(inputChemistry);
let Bio = parseFloat(inputBiology);
// dùng Float thay Int để nhập số thập phân

let total = Phy + Chem + Bio;
let average = total / 3;
document.write("Điểm tổng là : " + total);
document.write("<br>");
document.write("Điểm trung bình là :" + average.toFixed(2));
// toFixed dùng làm tròn số thập phân


