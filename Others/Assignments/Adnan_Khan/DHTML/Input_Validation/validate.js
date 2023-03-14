var validateAccountName = (event)=>{
    console.log(event)
    if(event.keyCode >= 97 && event.keyCode <=122){
       return true
    }
    else if(event.keyCode >= 65 && event.keyCode <=90){
        return true;
    }
    else {
        alert("Only Characters are allowed")
        return false
    }
}

var validateAccountNumber = (event)=>{
    console.log(event)  
    if(event.keyCode >=48 && event.keyCode <=57){
        return true;
    }
    else{
        alert("Only Numbers are allowed")
        return false;
    }

}

var validateAccountPw = (event) =>{
    // console.log(event)

    console.log(event)
    var password = document.querySelector("#accPass").value;
    password = password.trim()

    var TotalDigits = /[0-9]/g;
    var specialChar = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;

    if(password.length>=8){
        document.querySelector("#span1").style.color = "green";
    }
    else{
        document.querySelector("#span1").style.color = "red"
    }

    if(password.charCodeAt(0)>=65 && password.charCodeAt(0)<= 90){
        document.querySelector("#span2").style.color = "green"
    }
    else{
        document.querySelector("#span2").style.color = "red";
    }
    if(password.length >= 3){
        document.querySelector("#span3").style.color = "green"
    }
    else {
        document.querySelector("#span4").style.color = "red"
    }
    if(password.match(specialChar).length>=2){
        document.querySelector("#span4").style.color = "green"
    }
    else {
        document.querySelector("#span4").style.color = "red"
    }
    if(password.match(TotalDigits).length!=null && password.match(TotalDigits).length>=1){
        document.querySelector("#span5").style.color = "green"
    }
    else{
        document.querySelector("#span5").style.color = "red"
    }
    var lastDigit = password.length-1
    if(password.charCodeAt(lastDigit)>=48 && password.charCodeAt(lastDigit)>=57){
        document.querySelector("#span6").style.color = "green"
    }
    else{
        document.querySelector("#span6").style.color = "red"
    }
 }