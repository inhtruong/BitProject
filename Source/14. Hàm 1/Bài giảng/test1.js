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
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 == 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function calculatorSumOfMainDiagonal(matrix) {
  let sumOfMainDiagonal = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
      if (i == j) {
        sumOfMainDiagonal += matrix[i][j];
      }
    }
  }
  return sumOfMainDiagonal;
}

function calculatorSumOfAuxiliaryDiagonal(matrix) {
  let sumOfAuxiliaryDiagonal = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (i + j == matrix[i].length - 1) {
        sumOfAuxiliaryDiagonal += matrix[i][j];
      }
    }
  }
  return sumOfAuxiliaryDiagonal;
}

function calculatorSumOfBorderLine(matrix) {
  let sumOfBorderLine = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (
        i == 0 ||
        i == matrix[i].length - 1 ||
        j == 0 ||
        j == matrix[i].length - 1
      ) {
        sumOfBorderLine += matrix[i][j];
      }
    }
  }
  return sumOfBorderLine;
}

function printUpperTriangle(matrix) {
  let tab_Upper = `<table border = 1>`;
  for (let i = 0; i < matrix.length; i++) {
    tab_Upper += `<tr>`;
    for (let j = 0; j < i; j++) {
      tab_Upper += `<td width = 100></td>`;
    }
    for (let j = i; j < matrix[i].length; j++) {
      tab_Upper += `<td width = 100> ${matrix[i][j]} </td>`;
    }
    tab_Upper += `</tr>`;
  }
  tab_Upper += `</table>`;
  return tab_Upper;
}

function printLowerTriangle(matrix) {
  let tab_Lower = `<table border = 1>`;
  for (let i = 0; i < matrix.length; i++) {
    tab_Lower += `<tr>`;
    for (let j = 0; j <= i; j++) {
      tab_Lower += `<td width = 100> ${matrix[i][j]} </td>`;
    }
    for (let j = i; j < matrix[i].length - 1; j++) {
      tab_Lower += `<td width = 100></td>`;
    }
    tab_Lower += `</tr>`;
  }
  tab_Lower += `</table>`;
  return tab_Lower;
}
//================= Hiển thị ra màn hình =======================
function getMatrix() {
  let size = parseInt(document.getElementById("size").value);
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  matrix = generateMatrix(size, min, max);
  document.getElementsByClassName("result")[4].innerHTML = printMatrix(matrix);
  // document.getElementsByClassName("result")[0].innerHTML = calculatorSumOfEven(matrix);
}

function sumOfEven() {
  document.getElementsByClassName("result")[0].innerHTML =
    calculatorSumOfEven(matrix);
}

function sumOfMainDiagonal() {
  document.getElementsByClassName("result")[1].innerHTML =
    calculatorSumOfMainDiagonal(matrix);
}

function sumOfAuxiliaryDiagonal() {
  document.getElementsByClassName("result")[2].innerHTML =
    calculatorSumOfAuxiliaryDiagonal(matrix);
}

function sumOfBorderLine() {
  document.getElementsByClassName("result")[3].innerHTML =
    calculatorSumOfBorderLine(matrix);
}

function showUpperTriangle() {
  document.getElementsByClassName("result")[5].innerHTML =
    printUpperTriangle(matrix);
}

function showLowerTriangle() {
  document.getElementsByClassName("result")[6].innerHTML =
    printLowerTriangle(matrix);
}


