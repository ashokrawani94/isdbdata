var data=function(){
    var firstvalue = document.querySelector("#fvalue").value;
    firstvalue=parseInt(firstvalue);
    var secondvalue = document.querySelector("#svalue").value;
    secondvalue=parseInt(secondvalue);
    var dooperation = document.querySelector("#dooperation").value;
    var result=0;

    switch(dooperation){
        case"add":
            result = firstvalue+secondvalue;
            break;
        case "sub":
            result = firstvalue-secondvalue;
            break;
        case"mul":
            result = firstvalue * secondvalue;
            break;
        case"div":
            result = firstvalue/secondvalue;
            break;
        default:
            result= 'wrong selection';
    }
    document.querySelector("#resul").innerHTML= result;

}
data();