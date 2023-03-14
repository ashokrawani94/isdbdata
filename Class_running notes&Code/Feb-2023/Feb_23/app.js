 var doAddition = () => {
    var a1 = document.querySelector("#fval").value;
    a1 = parseInt(a1);
    var a2 = document.querySelector("#sval").value;
    a2 = parseInt(a2);
    var result = a1 + a2;
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