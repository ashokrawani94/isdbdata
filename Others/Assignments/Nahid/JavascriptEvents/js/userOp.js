var getValue = function(){
    var firstValue = document.querySelector("#firstValue").value;
    firstValue = parseInt(firstValue);
    var secValue = document.querySelector("#secondValue").value; 
    secValue = parseInt(secValue);       
    var expr = document.querySelector("#userOperation").value;    
    var result = 0;
    
    switch(expr){
        case "Add":
            result = firstValue + secValue;
            break;
        case "Sub":
            result = firstValue - secValue;
            break;
        case "Mul":
            result = firstValue * secValue;
            break;
        case "Div":
            result = firstValue / secValue;
            break;
        default:
            result = "wrong inputs";
    }
    
    document.querySelector("#res").innerHTML = "Calculated Value is: " + result;
    document.querySelector("#res").setAttribute("style","color:blue;");

}