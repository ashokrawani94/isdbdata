var getSelectedText = function () {
  var text = document.querySelector("#userOption").value;
  displayResult(text);
};

var displayResult = function (txt) {
  var result = arithmetic(txt);
  document.querySelector("#rblock").innerHTML = result;
};

var arithmetic = function (operation) {
  var number1 = parseInt(document.querySelector("#fval").value),
    number2 = parseInt(document.querySelector("#sval").value);

  var result = {
    addition: function () {
      return number1 + number2;
    },
    subtraction: function () {
      return number1 - number2;
    },

    multiplication: function () {
      return number1 * number2;
    },
    division: function () {
      return number1 / number2;
    },
  };
  return `The  ${operation} of ${number1} and ${number2} : ${result[
    operation
  ]()}`;
};
