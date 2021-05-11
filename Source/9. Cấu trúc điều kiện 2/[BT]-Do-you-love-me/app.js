let buttonYes = document.getElementById("yes");
    buttonYes.addEventListener("click", yesFunc);
    function yesFunc(){
        alert ("Yes. you are right");
    }


let buttonNo = document.getElementById("no");
    buttonNo.addEventListener("mouseover", noFunc);
   
    function noFunc() {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        buttonNo.style.position = "absolute";
        buttonNo.style.left = x + "px";
        buttonNo.style.top = y + "px";
        
    }

    // Math.random() tạo ra số ngẫu nhiên
    // Math.floor để làm tròn số ngẫu nhiên
