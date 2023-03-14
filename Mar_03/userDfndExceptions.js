
// var userDetails = {};
// var registerUserDetails = () => {
//     userDetails.actId = document.querySelector('#uaccountId').value;
//     if (!userDetails.actId) {
//         document.querySelector(".iderr").style.display = 'block';
//         return;
//     }
//     userDetails.actPwd = document.querySelector('#accntPwd').value;
//     if (!userDetails.actPwd || userDetails.actPwd.length < 8) {
//         document.querySelector(".pwdErr").style.display = 'block';
//         return;
//     }
//     var ractPwd = document.querySelector('#rAccntPwd').value;
//     if (ractPwd != userDetails.actPwd) {
//         document.querySelector(".pwdRenterErr").style.display = 'block';
//         return;
//     }
//     userDetails.actMailId = document.querySelector('#actMailId').value;
//     console.log(userDetails);
    
// }


var userDetails = {};
var registerUserDetails = () => {
   
    try {
        userDetails.actId = document.querySelector('#uaccountId').value;
        if (!userDetails.actId) {
            throw 'IDERROR';
        }
        userDetails.actPwd = document.querySelector('#accntPwd').value;
        if (!userDetails.actPwd || userDetails.actPwd.length < 8) {
            throw 'PWDERROR';
        }
        var ractPwd = document.querySelector('#rAccntPwd').value;
        if (ractPwd != userDetails.actPwd) {
            throw 'RPWDERROR';
        }        
    } catch (error) {
        switch(error) {
            case 'IDERROR':
                document.querySelector(".iderr").style.display = 'block';
                break;
            case 'PWDERROR':
                document.querySelector(".pwdErr").style.display = 'block';
                break;
            case 'RPWDERROR':
                document.querySelector(".pwdRenterErr").style.display = 'block';
                break;
        }
    }
    
    userDetails.actMailId = document.querySelector('#actMailId').value;
    console.log(userDetails);
    
}
