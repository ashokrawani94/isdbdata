var getValue = function () {
    var fval = document.querySelector("#fval").value;
    fval = parseInt(fval);
    var sval = document.querySelector("#sval").value;
    sval = parseInt(sval);
    var expression = document.querySelector("#userOption").value;
    var result = 0;

    switch(expression){
        case "Addition" :
            result = fval + sval;
            break;
        case "Substraction" :
            result = fval - sval;
            break;
        case "Multiplication" :
            result = fval * sval;
        break;
        case "Division" :
            result = fval / sval;
        break;
        default:
            result = "wrong inputs";
    }

    document.querySelector("#result1").innerHTML = "cal value is: " +result;
    document.querySelector("#result1").setAttribute("style","color:brown;");
    


}