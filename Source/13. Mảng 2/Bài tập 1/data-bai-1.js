function submit() {
  let arr = [];
  let size = +document.getElementById("length").value;
  const min = 10,
    max = 90;
  let mainDiagonal = (auxiliaryDiagonal = sum = borderline = 0);
  let tab, tab1, tab2;

  //============ Tạo bảng và tạo mảng 2 chiều ----------------

  tab = "<table border = 1>";
  tab += "<tr><th colspan = 10>Bảng</th>";
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    tab += "<tr>";
    for (let j = 0; j < size; j++) {
      arr[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
      tab += `<td width = 100> ${arr[i][j]} </td>`;
    }
    tab += "</tr>";
    j = 0;
  }
  tab += "</table>";
  document.getElementsByClassName("result")[4].innerHTML = tab;

  // ================= Tính tổng chẵn của mảng ===================

  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (arr[i][j] % 2 == 0) {
        sum += arr[i][j];
      }
    }
  }
  document.getElementsByClassName("result")[0].innerHTML = sum;

  // =============== Tỉnh tổng 2 đường chéo chính phụ và đường biên ==================

  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (i == j) {
        mainDiagonal += arr[i][j];
      }
      if (i + j == size - 1) {
        auxiliaryDiagonal += arr[i][j];
      }
      if (i == 0 || i == size - 1 || j == 0 || j == size - 1)
        borderline += arr[i][j];
    }
  }
  document.getElementsByClassName("result")[1].innerHTML = mainDiagonal;
  document.getElementsByClassName("result")[2].innerHTML = auxiliaryDiagonal;
  document.getElementsByClassName("result")[3].innerHTML = borderline;

  // ================= Hiển thị tam giác dưới ====================

  tab1 = "<table border = 1>";
  tab1 += "<tr><th colspan = 10>Bảng</th>";
  for (let i = 0; i < size; i++) {
    tab1 += "<tr>";
    for (let j = 0; j <= i; j++) {
      tab1 += `<td width = 100> ${arr[i][j]} </td>`;
    }
    for (let j = i; j < size - 1; j++) {
      tab1 += `<td width = 100></td>`;
    }
    tab1 += "</tr>";
    j = 0;
  }
  tab1 += "</table>";
  document.getElementsByClassName("result")[5].innerHTML = tab1;

  // ================= Hiển thị tam giác trên ====================

  tab2 = "<table border = 1>";
  tab2 += "<tr><th colspan = 10>Bảng</th>";
  for (let i = 0; i < size; i++) {
    tab2 += "<tr>";
    for (let j = 0; j < i; j++) {
      tab2 += `<td width = 100></td>`;
    }
    for (let j = i; j < size; j++) {
      tab2 += `<td width = 100> ${arr[i][j]} </td>`;
    }

    tab2 += "</tr>";
    j = 0;
  }
  tab2 += "</table>";
  document.getElementsByClassName("result")[6].innerHTML = tab2;
}
