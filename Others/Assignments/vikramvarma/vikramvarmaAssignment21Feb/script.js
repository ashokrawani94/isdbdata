var result;

var calDetails = {};
var caliculation = () => {
  calDetails.inputNum1 = document.querySelector("#value1").value;
  calDetails.inputNum1 = parseInt(calDetails.inputNum1);
  calDetails.inputNum2 = document.querySelector("#value2").value;
  calDetails.inputNum2 = parseInt(calDetails.inputNum2);
  calDetails.action = document.querySelector("#dropdown").value;
  if (calDetails.action == "Add") {
    result = calDetails.inputNum1 + calDetails.inputNum2;
  }
  if (calDetails.action == "Subtract") {
    result = calDetails.inputNum1 + calDetails.inputNum2;
  }
  if (calDetails.action == "divide") {
    result = calDetails.inputNum1 / calDetails.inputNum2;
  }
  if (calDetails.action == "Multiply") {
    result = calDetails.inputNum1 * calDetails.inputNum2;
  }
  document.querySelector("#show").innerHTML = result;
};
