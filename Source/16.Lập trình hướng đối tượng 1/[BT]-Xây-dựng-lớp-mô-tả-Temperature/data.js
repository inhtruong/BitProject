class Temperature {
    constructor (C) {
        if (C > -273) {
            this.C = C;
        } else {
            alert ("Nhập lại giá trị")
        } 
    }
    ConvertCtoF(F) {
       return F = (this.C * 9 / 5) + 32;
    }
    ConvertCtoK (K) {
       return K = this.C + 273.15;
    }
}

let value = parseInt(prompt("Enter the temperature value C:")) ;
let temperature = new Temperature(value);

let CtoF = temperature.ConvertCtoK();
let CtoK = temperature.ConvertCtoF();

document.write(`Nhiệt độ là: ${value}°C <br>`)
document.write(`Nhiệt độ Fahrenheit là: ${CtoF}°F <br>`)
document.write(`Nhiệt độ Kelvin là: ${CtoK} K`)