let matrix;

function generateMatrix(size, min, max) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
  return matrix;
}



function printMatrix(matrix) {
  let tab = `<table border = 1>`;
  for (let i = 0; i < matrix.length; i++) {
    tab += `<tr>`;
    for (let j = 0; j < matrix[i].length; j++) {
      tab += `<td width = 50> ${matrix[i][j]} </td>`;
    }
    tab += `</tr>`;
  }
  tab += `</table>`;
  return tab;
}



function calculatorSumOfEven(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] % 2 == 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function showMatrix() {
  document.getElementsByClassName("result")[1].innerHTML = printMatrix(matrix);
}

function sumOfEven() {
    document.getElementsByClassName("result")[0].innerHTML = calculatorSumOfEven(matrix);
}


function getMatrix(){
    let size = parseInt(document.getElementById("size").value);
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    matrix = generateMatrix(size, min, max);
    document.getElementsByClassName("result")[1].innerHTML = printMatrix(matrix);
    // document.getElementsByClassName("result")[0].innerHTML = calculatorSumOfEven(matrix);
}
s
// function printSumOfEven(matrix, sumOfEven) {
//   sumOfEven = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       sumOfEven += matrix[i][j];
//     }
//   }
//   return sumOfEven;
// }
