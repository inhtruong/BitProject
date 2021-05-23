let engLish = [
  "lemon",
  "mango",
  "apple",
  "strawberry",
  "banana",
  "avocado",
  "jackfruit",
];
let vietNam = [
  "quả chanh",
  "quả xoài",
  "quả táo",
  "quả dâu tây",
  "trái chuối",
  "quả bơ",
  "quả mít",
];
let result;
function search() {
  let data = document.getElementById("data").value;
  data = clearUnnecessaryWhiteSpace(data);
  dictionary(engLish, vietNam, data);
}

function clearUnnecessaryWhiteSpace(str) {
  return str.trim().replace(/  +/g, " ");
}

function dictionary(arr_1, arr_2, data) {
  if (arr_1.indexOf(data) != -1) {
    for (i in arr_2) {
      if (i == arr_1.indexOf(data)) {
        result = arr_2[i];
      }
    }
  } else {
    result = "Không tìm được từ này!";
  }
  document.getElementsByTagName("span")[0].innerHTML = result;
}
