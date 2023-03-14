var passwordError = document.querySelector('#aPass')

var validAccountName = (event) => {
  console.log(event)
  if ((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 65 && event.keyCode <= 90)) {
    return true
  } else {
    return false
  }
}

var validAccountNumber = (event) => {
  console.log(event)
  if ((event.keyCode >= 48 && event.keyCode <= 57)) {
    return true
  } else {
    return false
  }
}

passwordError.onfocus = function () {
  document.querySelector('.passwordValidator').style.display = 'block'
}

passwordError = function () {

  var firstLetter = /^[A-Z]/g
  if (passwordError.ariaValueMax.match(firstLetter)) {
    document.querySelector('.firstLetter').style.color = "green";
  } else {
    document.querySelector('.firstLetter').style.color = "red";
  }

  var character = /(.*[a-zA-Z]){3}/g;
  if (myInput.value.match(character)) {
    document.querySelector('.threeChar').style.color = "green";
  } else {
    document.querySelector('.threeChar').style.color = "red";
  }

  var symbol = /(.*[!@#$%^&*(),.?":{}|<>]){2}/g;
  if (myInput.value.match(symbol)) {
    document.querySelector('.twoSymbols').style.color = "green";
  } else {
    document.querySelector('.twoSymbols').style.color = "red";
  }

  var number = /(.*[0-9]){1}/g;
  if (myInput.value.match(number)) {
    document.querySelector('.oneNumber').style.color = "green";
  } else {
    document.querySelector('.oneNumber').style.color = "red";
  }

  var endCharacter = /(.*[a-zA-Z!@#$%^&*(),.?":{}|<>])$/g;
  if (myInput.value.match(endCharacter)) {
    document.querySelector('.endNumber').style.color = "green";
  } else {
    document.querySelector('.endNumber').style.color = "red";
  }

}


