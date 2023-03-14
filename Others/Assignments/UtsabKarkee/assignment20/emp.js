var calculation = {
  getPFOrHRA: function (basicSalary, type) {
    var total = 0;
    switch (type) {
      case "PF":
        total = basicSalary * 0.14;
        break;
      case "HRA":
        total = basicSalary * 0.25;
        break;
      default:
        console.log("Unknown value");
    }
    return total;
  },
  calculateTotalSalary: function (basicSalary, pfa, hra) {
    return basicSalary + pfa + hra;
  },
  totalTaxCalculate: function (totalSalary, gender) {
    var totalTax = 0;
    switch (gender) {
      case "Male": {
        if (totalSalary > 100000) totalTax = totalSalary * 0.15;
        else if (totalSalary >= 50000) totalTax = totalSalary * 0.1;
        else if (totalSalary >= 25000) totalTax = totalSalary * 0.05;
        else totalTax = 0;
        break;
      }
      case "Female": {
        if (totalSalary > 100000) totalTax = totalSalary * 0.1;
        else if (totalSalary >= 50000) totalTax = totalSalary * 0.05;
        else totalTax = 0;
        break;
      }
      default:
        console.log("Incorrect Value");
    }
    return totalTax;
  },
};

var employeeInfo = {};

var readEmpData = function () {
  employeeInfo.name = document.querySelector("#ename").value;
  employeeInfo.age = ageCalculator(document.querySelector("#edob").value);
  employeeInfo.gender = document.querySelector(
    "input[name=gender]:checked"
  ).value;
  employeeInfo.department = document.querySelector("#empDepartment").value;
  employeeInfo.salary = parseInt(document.querySelector("#esalary").value);
  employeeInfo.hra = calculation.getPFOrHRA(employeeInfo.salary, "HRA");
  employeeInfo.pfa = calculation.getPFOrHRA(employeeInfo.salary, "PF");
  employeeInfo.totalSalary = calculation.calculateTotalSalary(
    employeeInfo.salary,
    employeeInfo.pfa,
    employeeInfo.hra
  );
  employeeInfo.totalTax = calculation.totalTaxCalculate(
    employeeInfo.totalSalary,
    employeeInfo.gender
  );
  displayEmployeeData();
  document.querySelector(".progressCardBlock").style.display = "block";
};

var displayEmployeeData = function () {
  for (var key in employeeInfo) {
    document.querySelector("#" + key).innerText = employeeInfo[key];
  }
};

var ageCalculator = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
