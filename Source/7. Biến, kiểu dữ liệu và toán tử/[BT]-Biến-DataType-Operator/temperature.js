let inputTemp=prompt("Nhập nhiệt độ C");
let C = parseInt(inputTemp);
let F = (C * 9 / 5) + 32;
    F = F.toFixed(3);
document.write('Nhiệt độ K bằng ' + F + 'F');
