var formValidation = function (event) {
  var acctName = document.querySelector("#name").value,
    acctNumber = document.querySelector("#number").value,
    acctPassword = document.querySelector("#password").value,
    acctRePassword = document.querySelector("#rpassword").value;

  var condition =
    nameValidate(acctName) &&
    numberValidate(acctNumber) &&
    passwordValidate(acctPassword) &&
    repasswordValidate(acctPassword, acctRePassword);

  return condition;
};

var nameValidate = function (name) {
  var flag = name.length > 3;
  if (!flag) {
    document.querySelector("#errorName").innerHTML =
      "Name Must Be At Least 4 Characters";
    document.querySelector("#errorName").style.color = "red";
  } else {
    document.querySelector("#errorName").innerHTML = "Success";
    document.querySelector("#errorName").style.color = "green";
  }
  return flag;
};

var passwordValidate = function (password) {
  var regex =
      /^[A-Z](?=.*[A-Za-z]{2})(?=.*\d)(?=.*[@$!%*#?&]{2})[A-Za-z\d@$!%*#?&]{6}[A-Za-z@$!%*#?&]$/,
    flag = regex.test(password);
  if (!flag) {
    document.querySelector("#errorPassword").innerHTML =
      "Password Must Be 8 characters begins with uppercase does not end with digits at least 1 digit at least 2 symbol";
    document.querySelector("#errorPassword").style.color = "red";
  } else {
    document.querySelector("#errorPassword").innerHTML = "Success";
    document.querySelector("#errorPassword").style.color = "green";
  }
  return flag;
};

var repasswordValidate = function (password, rpassword) {
  var flag = password == rpassword;
  if (!flag) {
    document.querySelector("#errorRPassword").innerHTML =
      "Password and Repassword Do Not Match";
    document.querySelector("#errorRPassword").style.color = "red";
  } else {
    document.querySelector("#errorRPassword").innerHTML = "Success";
    document.querySelector("#errorRPassword").style.color = "green";
  }
  return flag;
};

var numberValidate = function (number) {
  var flag = false;
  if (number) {
    flag = /^[1-9]\d{9}$/.test(number);
  }
  if (!flag) {
    document.querySelector("#errorNumber").innerHTML =
      "Account Number Must Be At 10 Digits without 0 starting.";
    document.querySelector("#errorNumber").style.color = "red";
  } else {
    document.querySelector("#errorNumber").innerHTML = "Success";
    document.querySelector("#errorNumber").style.color = "green";
  }
  return flag;
};
//-------------------

var validateAccountName = function (e) {
  var character = e.key,
    regex = /[a-z ]/i,
    isTrue = regex.test(character);
  if (isTrue) {
    var message = document.querySelector("#errorName");
    messageStyle([message, isTrue, character]);
  } else {
    var message = document.querySelector("#errorName");
    messageStyle([message, isTrue, character, "Only A-Z space allowed."]);
  }
  if (e.key == "Backspace") {
    document.querySelector("#errorName").innerHTML = "";
  }
  return isTrue;
};

var validateAccountNumber = function (e) {
  var character = e.key,
    regex = /\d/,
    isTrue = regex.test(character);
  if (isTrue) {
    var message = document.querySelector("#errorNumber");
    messageStyle([message, isTrue, character]);
  } else {
    var message = document.querySelector("#errorNumber");
    messageStyle([message, isTrue, character, "Only Digits Allowed."]);
  }
  if (e.key == "Backspace") {
    document.querySelector("#errorNumber").innerHTML = "";
  }
  return isTrue;
};

var validateAccountPassword = function (e) {
  var character = e.key,
    regex = /[0-9a-zA-Z@$!%*#?&]/,
    isTrue = regex.test(character);
  if (isTrue) {
    var message = document.querySelector("#errorPassword");
    messageStyle([message, isTrue, character]);
  } else {
    var message = document.querySelector("#errorPassword");
    messageStyle([
      message,
      isTrue,
      character,
      "Only 0-9a-zA-Z@$!%*#?& Allowed.",
    ]);
  }
  if (e.key == "Backspace") {
    document.querySelector("#errorPassword").innerHTML = "";
  }
  return isTrue;
};

var validateAccountRePassword = function (e) {
  var character = e.key,
    regex = /[0-9a-zA-Z!@$!%*#?&]/,
    isTrue = regex.test(character);
  if (isTrue) {
    var message = document.querySelector("#errorRPassword");
    messageStyle([message, isTrue, character]);
  } else {
    var message = document.querySelector("#errorRPassword");
    messageStyle([
      message,
      isTrue,
      character,
      "Only 0-9a-zA-Z@$!%*#?& Allowed.",
    ]);
  }
  if (e.key == "Backspace") {
    document.querySelector("#errorRPassword").innerHTML = "";
  }
  return isTrue;
};

var messageStyle = function (item) {
  if (item[1]) {
    item[0].innerHTML = "Character Allowed.";
    item[0].style.color = "green";
  } else {
    item[0].innerHTML = `Failure You entered ${item[2]}. ${item[3]}`;
    item[0].style.color = "red";
  }
  return;
};

//[0-9a-zA-Z!@#$%]
