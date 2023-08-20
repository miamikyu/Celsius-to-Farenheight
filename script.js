document.querySelector(".text").style.display="block";
function swapConvert(){
    if(document.getElementById("input").placeholder==="°C"){
        document.getElementsById("input")[0].placeholder="°F";
    }
    else{
        document.getElementsById("input")[0].placeholder="°C"; 
    }
    
}
function convert(){
    if(document.getElementById("input").value===''){
        alert("Please write something!");
    }
    else{
        var cTemp = parseFloat(document.getElementById("input").value);
        var fTemp = (cTemp*(9/5))+32;
        document.querySelector(".text").innerHTML=fTemp+"°F";
    }
}
