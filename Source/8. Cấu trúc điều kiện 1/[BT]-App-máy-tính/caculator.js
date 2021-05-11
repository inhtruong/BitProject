let add = document.getElementById('add');
            add.addEventListener('click',tinhtong);
        let sub = document.getElementById('sub');
            sub.addEventListener('click',tinhhieu);
        let mul = document.getElementById('mul');
            mul.addEventListener('click',tinhnhan);
        let div = document.getElementById('div');
            div.addEventListener('click',tinhthuong);

    function tinhtong(){
    
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let tong = parseFloat(input1) + parseFloat(input2);
    // let cal = document.getElementById('cal');
    // cal = "Addition";
   
            document.getElementById('cal').innerText = tong ;
}
    function tinhnhan(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let tich = parseFloat(input1) * parseFloat(input2);
    // let cal = document.getElementById('cal');
    // cal = "Addition";
   
            document.getElementById('cal').innerText = tich ;
}
    function tinhhieu(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let hieu = parseFloat(input1) - parseFloat(input2);
        
    // let cal = document.getElementById('cal');
    // cal = "Addition";
   
        document.getElementById('cal').innerText = hieu ;
}
    function tinhthuong(){
        let input1 = document.getElementById('input1').value;
        let input2 = document.getElementById('input2').value;
        let thuong = parseFloat(input1) / parseFloat(input2);
        
    // let cal = document.getElementById('cal');
    // cal = "Addition";
   
            document.getElementById('cal').innerText = thuong ;
}