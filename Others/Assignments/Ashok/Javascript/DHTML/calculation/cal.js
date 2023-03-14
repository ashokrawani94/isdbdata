var getCal = () =>{
    var firstValue = document.querySelector("#fValue").value;
    firstValue = parseInt(firstValue);
    var secondValue = document.querySelector("#fValue").value;
    secondValue = parseInt(secondValue);
    var oper = document.querySelector("#userOperation").value;
    var result = 0;

    switch(oper){
        case "Add":
            result = firstValue + secondValue;
            break;
        case "Sub":
            result = firstValue - secondValue;
            break;
        case "Mul":
            result = firstValue * secondValue;
            break;
        case "Add":
            result = firstValue / secondValue;
            break;
        default:
            result = "wrong selection";    
    }
    document.querySelector("#res").innerHTML = "calculate value is: "+ result;

}
