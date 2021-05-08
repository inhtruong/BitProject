let bmi = 0;
let inter = null;
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;
let test = document.getElementById("test");
    test.addEventListener("click", testFunc);

    function testFunc(){


        weight = parseFloat (document.getElementById("weight").value);
        height = parseFloat (document.getElementById("height").value);
        
        bmi = weight / ( height ^ 2 );
       
        if (bmi < 18.5) {
            inter = "Underweight";
        }
        else if (bmi < 25.0){
            inter = "Normal";
        }
        else if (bmi < 30.0) {
            inter = "Overweight";
        }
        else {
            inter = "Obese";
        }      
        document.getElementById("inter").innerText = (inter);
    }