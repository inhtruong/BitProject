var convert = document.getElementById("do_something");
    convert.addEventListener("click",convertFunction);
    function convertFunction(){
        let varInput= document.getElementById('input-var').value;
        let selectFrom = document.getElementById('selectFrom').value;
        let selectTo = document.getElementById('selectTo').value;
        
        if (selectFrom == selectTo) {
            document.getElementById("result").innerText=(varInput);
        }
        if (selectFrom == "VND" && selectTo == "USD") {
            document.getElementById("result").innerText=(varInput/23500);
        }
        if (selectFrom == "USD" && selectTo == "VND") {
            document.getElementById("result").innerText=(varInput*23500);
        }
    }