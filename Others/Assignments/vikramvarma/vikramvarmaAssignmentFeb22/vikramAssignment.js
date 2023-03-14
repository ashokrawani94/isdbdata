var employeeData = {
  pf: 14,
  hra: 25,

  gettotaltax() {
    this.fiftentax = (this.empSalary * 15) / 100;
    this.tentax = (this.empSalary * 10) / 100;
    this.fivetax = (this.empSalary * 5) / 100;
    this.pfhraTax =
      (this.empSalary * this.pf) / 100 + (this.empSalary * this.hra) / 100;
    if (this.empGender == "male") {
      if (this.empSalary >= 100000) {
        this.totaltax = this.fiftentax + this.pfhraTax;
      } else if (this.empSalary >= 50000) {
        this.totaltax = this.tentax + this.pfhraTax;
      } else if (this.empSalary >= 25000) {
        this.totaltax = this.fivetax + this.pfhraTax;
      } else {
        this.totaltax = this.pfhraTax;
      }
    }
    if (this.empGender == "female") {
      if (this.empSalary >= 100000) {
        this.totaltax = this.tentax + this.pfhraTax;
      } else if (this.empSalary >= 50000) {
        this.totaltax = this.fivetax + this.pfhraTax;
      } else {
        this.totaltax = this.pfhraTax;
      }
    }
    this.totalsalary = this.totaltax + this.empSalary;
  },
  displayDetails() {
    this.gettotaltax();
    document.querySelector("#dname").innerHTML = this.empName;
    document.querySelector("#dage").innerHTML = this.empAge;
    document.querySelector("#dgender").innerHTML = this.empGender;
    document.querySelector("#dDpt").innerHTML = this.empDpt;
    document.querySelector("#dsalary").innerHTML = this.empSalary;
    document.querySelector("#dtax").innerHTML = this.totaltax;
    document.querySelector("#dtotal").innerHTML = this.totalsalary;
    document.getElementById("dlang").innerHTML = this.languages.join(",");
  },
};
payslipGenerator = () => {
  employeeData.empName = document.querySelector("#ename").value;
  employeeData.empAge = document.querySelector("#eage").value;
  employeeData.empGender = document.querySelector(
    "input[name=gender]:checked"
  ).value;
  employeeData.empSalary = document.querySelector("#esalary").value;
  employeeData.empSalary = parseInt(employeeData.empSalary);
  employeeData.empDpt = document.querySelector("#edpt").value;
  employeeData.languages = [];
  if (document.querySelector("#tel").checked) {
    employeeData.languages.push(document.querySelector("#tel").value);
  }
  if (document.querySelector("#hin").checked) {
    employeeData.languages.push(document.querySelector("#hin").value);
  }
  if (document.querySelector("#eng").checked) {
    employeeData.languages.push(document.querySelector("#eng").value);
  }
  document.querySelector(".inputDetails").style.display = "none";
  document.querySelector(".payslipDetails").style.display = "block";
  employeeData.displayDetails();
  console.log(employeeData);
};
