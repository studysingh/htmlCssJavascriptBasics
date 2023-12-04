let output = document.getElementById("output");
let ac = document.getElementById("AC");
let Cancel = document.getElementById("Cancel");
let equal = document.getElementById("=");

exp = "";
// Appending element to expression
function makeExp(clicked_id){
    btnClicked = document.getElementById(`${clicked_id}`);
    valueToAppend = btnClicked.textContent;
    exp += valueToAppend;
    output.value = exp;
}
// function for AC button
function acc(){
    output.value = "";
    exp = "";
}
// function for = button
function evaluateExpression(){
    exp = eval(exp);
    output.value = exp;
}
// function for Cancel button
function cancelIt(){
    size = exp.length;
    if(size>1){
    exp = exp.slice(0,size-1);
    } else{
        exp = "";
    }
    output.value = exp;
}