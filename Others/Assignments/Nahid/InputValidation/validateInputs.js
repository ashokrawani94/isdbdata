validateAccountName = (event)=>{
    console.log(event);
    if(event.keyCode >= 97 && event.keyCode <= 122){
        document.querySelector("#accId").display="none";
        return true;
    }
    else if(event.keyCode >= 65 && event.keyCode <= 90){
        document.querySelector("#accId").display="none";
        
        return true;
    }
    else{
        document.querySelector("#accId").display="block";
        document.querySelector("#accId").style.color="red";
        return false;
    }
}

validateAccountNumber = (event)=>{
    console.log(event);
    if(event.keyCode >= 48 && event.keyCode <= 57){
        return true;
    }
    else{
        return false;
    }
}

validatePassword = ()=>{    
    var str = document.querySelector("#pwdText").value;
    str = str.trim();
    
    var countCharacters = /[a-zA-Z]/g; // only count letters
    var countDigits = /[0-9]/g; // only count letters
    var specialchar = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
   
    //console.log(); 
    if(str.length>=8){
        document.querySelector("#span1").style.color="green";       
    }
    else{
        document.querySelector("#span1").style.color="red";        
    }
    
    if(str.charCodeAt(0)>= 65 && str.charCodeAt(0)<= 90){
        document.querySelector("#span2").style.color="green";       
    }
    else{
        document.querySelector("#span2").style.color="red"; 
    }

    if(str.match(countCharacters).length>=3){
        document.querySelector("#span3").style.color="green";       
    }
    else{
        document.querySelector("#span3").style.color="red"; 
    }

    if(str.match(specialchar).length>=2){
        document.querySelector("#span4").style.color="green";       
    }
    else{
        document.querySelector("#span4").style.color="red"; 
    }

    if(str.match(countDigits).length>=1){
        document.querySelector("#span5").style.color="green";       
    }
    else{
        document.querySelector("#span5").style.color="red"; 
    }

    var len = str.length-1;
    if(str.charCodeAt(len)>= 48 && str.charCodeAt(len)<= 57){
        document.querySelector("#span6").style.color="red";       
    }
    else{
        document.querySelector("#span6").style.color="green"; 
    }
}