let usdToVnd = 23500;
let vnd = "VND";
let usd = "USD";
let selectFrom = parseInt(document.getElementById('selectFrom').value);
let selectTo = parseInt(document.getElementById('selectTo').value);
let convert = document.getElementById("do_something");
    convert.addEventListener("click",convertFunction);
    function convertFunction(){
        let varInput= parseInt(document.getElementById('input-var').value);
        selectFrom = parseInt(document.getElementById('selectFrom').value);
        selectTo = parseInt(document.getElementById('selectTo').value);
        
        if (selectFrom == selectTo) {
            document.getElementById("result").innerText=(varInput);
        }
        if (selectFrom == vnd && selectTo == usd) {
            document.getElementById("result").innerText=(varInput/usdToVnd);
        }
        if (selectFrom == usd && selectTo == vnd) {
            document.getElementById("result").innerText=(varInput*usdToVnd);
        }
    }