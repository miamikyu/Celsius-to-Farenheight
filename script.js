const inputBox=parseFloat(document.getElementById("input-box").value);
const inputBox1=parseFloat(document.getElementById("input-box1").value);

function convertCtoF(){
    var fTemp =(inputBox*(9/5)+32);
    console.log(fTemp);
    document.getElementById("input-box1").value=fTemp;
    return false;
}
function convertFToC(){
    var cTemp=(inputBox1-32)*(5/9);
    document.getElementById("input-box").value=cTemp;
    return false;
}






function convert(){
    if(inputBox.value==="" && inputBox1!==""){
        convertFToC();
    }
    else if(inputBox.value!=="" && inputBox1===""){
        convertCtoF()
    }
}
