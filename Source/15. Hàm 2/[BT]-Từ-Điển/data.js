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
    if (engLish.indexOf(data) != -1) {
        for (i in vietNam) {
            if (i == engLish.indexOf(data))
            result = vietNam[i];
        }
    } else {
      result = "Không tìm được từ này!";
    }
  
  document.getElementsByTagName("span")[0].innerHTML = result;
}

function clearUnnecessaryWhiteSpace(str) {
    return str.trim().replace(/  +/g, " ");
  }
