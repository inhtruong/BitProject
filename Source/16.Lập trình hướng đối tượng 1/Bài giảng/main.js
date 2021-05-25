class Student 
{
    constructor (name, age, gender, mail, img) {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.mail = mail,
        this.img = img
    }
    info() {
        return `<tr>
                    <td>${this.name}</td>
                    <td>${this.age}</td>
                    <td>${this.gender}</td>
                    <td>${this.mail}</td>
                    <td><img width='150px' src='${this.img}'></td>
                </tr>`
    }
}

let phuoc = new Student("Phước Nguyễn", "25 tuổi", "Nam", "phuocnguyen@gmail.com","img/phuoc.jpg");
let binh = new Student("Bình Cao", "25 tuổi", "Nam", "binhcao@gmail.com","img/binh_lo.jpg");
let nhi = new Student("Nhi Nguyễn", "21 tuổi", "Nữ", "nhinguyen@gmail.com","img/nhi.jpg");
let son = new Student("Sơn Lê", "24 tuổi", "Nam", "sonle@gmail.com","img/son.jpg");
let loc = new Student("Lộc Trần", "22 tuổi", "Nam", "loctran@gmail.com","img/loc.jpg");

let student = [phuoc, binh, nhi, son, loc];
let result = `<table border='1' >
                <tr>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Email</th>
                    <th>Ảnh</th>
                </tr>`;
student.forEach(function(_name, index) {
    result += _name.info();
})
result += "</table>";

document.write(result);