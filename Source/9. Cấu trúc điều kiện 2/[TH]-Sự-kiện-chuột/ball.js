
let imgObj = null;
window.onload = init;
imgObj = document.getElementById("myImg");
function init(){
    imgObj = document.getElementById("myImg");
    imgObj.style.position = "relative";
    imgObj.style.left =  '0px';
    imgObj.style.transition = '.5s';
}

function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}

