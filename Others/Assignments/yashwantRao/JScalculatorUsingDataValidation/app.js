 var doAddition = () => {
    var a1 = document.querySelector("#fval").value;
    a1 = parseInt(a1);
    var a2 = document.querySelector("#sval").value;
    a2 = parseInt(a2);

    var result = 0;
    var selection = document.querySelector("#option").value;
    if (selection=='add') {
      result = a1 + a2;
    }
    else if (selection=='sub') {
      result = a1-a2;
    }
    else if (selection=='mul') {
      result = a1*a2;
    }
    else if (selection =='div') {
      result = a1/a2; 
    } else if (selection == 'aSquare') {
      result = a1*a1;
    }
    else if (selection == 'bSquare') {
      result = a2*a2;
    }
    else if ( selection == 'power') {
      result = 1;
      for (i=1; i<=a2; i++) {
        result = result * a1;
      }
    } else if (selection =='modOfA') {
      result = 1;
      for (i=1; i<(a1+1); i++) {
         result = result * i;
      }
    } else {
      result = 1;
      for (i=1; i<(a2+1); i++) {
         result = result * i;
      }
    }
    

    document.querySelector("#rblock").innerHTML = result;
 }

 var validateUserInput = (event) => {
   console.log(event);
//    if (event.keyCode >= 97 && event.keyCode <= 122) {
//         return false;

//    } else if (event.keyCode >= 65 && event.keyCode <= 90){
//         return false;
//    } else {
//     return true;
//    }

    if ((event.keyCode >= 48 &&  event.keyCode <= 57) || event.keyCode == 46) {
        return true;
    } else {
        return false;
    }
 }


 var showmsg = () => {
    console.log("Key press is fired")
 }