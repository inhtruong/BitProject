function view(button){
    document.getElementById('input').value += button;
}
function calculat(){
    let x = document.getElementById('input').value;   
    let y = eval(x);
    document.getElementById('input').value = y;
    if(y==undefined){
        alert("Please enter the number");
        document.getElementById('input').value = "";
    }   
} 
function clearnum(){
    
    document.getElementById('input').value = "" ;
}
  