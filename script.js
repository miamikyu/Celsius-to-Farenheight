document.querySelector(".text").style.display="block";
function swapConvert(){
    document.getElementById("input").value="";
    if(document.getElementById("input").placeholder=="°C"){
        document.getElementById("input").placeholder="°F";
    }
    else if(document.getElementById("input").placeholder=="°F"){
        document.getElementById("input").placeholder="°C";
    }
}


function convert(){
    if(document.getElementById("input").value===""){
        alert("Please write something!");
    }
    else if(document.getElementById("input").placeholder=="°C"){
        var cTemp = parseFloat(document.getElementById("input").value);
        var fTemp = (cTemp*(9/5))+32;
        document.querySelector(".text").innerHTML=fTemp+"°F";
    }
    else{
        var fTemp=parseFloat(document.getElementById("input").value);
        var cTemp =((fTemp-32)*(5/9));
        document.querySelector(".text").innerHTML=cTemp+"°C";
    }
}
