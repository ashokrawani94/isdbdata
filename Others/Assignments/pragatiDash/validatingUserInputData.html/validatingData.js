
var validateAccName = (event) => {
    console.log(event);
     if ((event.keyCode >= 65 &&  event.keyCode <= 90) || (event.keyCode >= 97 &&  event.keyCode <= 122)) {
         return true;
     } else {
         return false;
     }
  }

var validateAccNumber = (event) => {
    console.log(event);
     if (event.keyCode >= 48 &&  event.keyCode <= 57) {
         return true;
     } else {
         return false;
     }
  } 

var validateAccPwd = ()=>{
    //console.log(event);
    // var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //  if (event.keyCode(0) >= 65 &&  event.keyCode(0) <= 90) {
    //      return true;
    //  } 
    //  else if (event.key in arr)  {
    //     count = count + 1;
    //  } 
    // else {
    //     return false;
    // }

    var pwdstr = document.querySelector("#accPwd").value;
    pwdstr = pwdstr.trim();
    
    var pwdcharacters = /[a-zA-Z]/g;
    var numbers = /[0-9]/g;
    var specialcase = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;

    document.querySelector(".actPwdError").style.display = 'block';   

    if(pwdstr.length>=8){
        document.querySelector("#condtn1").style.color = "green";
    }
    else if(pwdstr.charCodeAt(0)>= 65 && pwdstr.charCodeAt(0)<= 90){
        document.querySelector("#condtn2").style.color = "green";          
    }      
    else if((pwdstr.match(pwdcharacters)).length>=3){
        document.querySelector("#condtn3").style.color = "green";            
    }
    else if((pwdstr.match(specialcase)).length>=2){
        document.querySelector("#condtn4").style.color = "green";          
    }
    else if((pwdstr.match(numbers)).length>=1){
        document.querySelector("#condtn5").style.color = "green";            
    }
    else if((pwdstr.charCodeAt(pwdstr.length-1))>= 48 && (pwdstr.charCodeAt(pwdstr.length-1))<= 57){
        document.querySelector("#condtn6").style.color = "green";           
    }

  } 

var accountDetails = {};
var validateAccountDetails = () =>{
    console.log("I am here -1");

    try {
    console.log("I am here -2");

    accountDetails.actName = document.querySelector("#accName").value;
    if (!accountDetails.actName) {
        throw 'ACTNAMEERROR';
    }

    console.log("I am here -3");
    accountDetails.actNo = document.querySelector("#accNumber").value;
    if(!accountDetails.actNo || accountDetails.actNo.length < 10 ){
        throw 'ACTNUMBERERROR';
    }
    console.log("I am here -4");
    accountDetails.actNo = parseInt(accountDetails.actNo);

    accountDetails.actPwd = document.querySelector("#accPwd").value;
    if(!accountDetails.actPwd){
        throw 'ACTPWDERROR';
    }

    console.log("I am here -5");

    accountDetails.rActPwd = document.querySelector("#resetPwd").value;
    if(accountDetails.rActPwd != accountDetails.actPwd){
        throw 'RACTPWDERROR';
    }

    console.log("I am here -6");

    }
 
    catch (error) {
        console.log("I am here -7");

        switch (error){
            case 'ACTNAMEERROR':
                document.querySelector(".actNameError").style.display = 'block';
                console.log("I am here -8");
                break;

            case 'ACTNUMBERERROR':
                document.querySelector(".actNumberError").style.display = 'block';
                console.log("I am here -9");
                break;


            case 'ACTPWDERROR':
                document.querySelector(".actPwdError").style.display = 'block';
                console.log("I am here -10");
                break;


            case 'RACTPWDERROR':
                document.querySelector(".rActPwdError").style.display = 'block';
                console.log("I am here -11");
                break;

        }


    }
console.log( accountDetails);
}
