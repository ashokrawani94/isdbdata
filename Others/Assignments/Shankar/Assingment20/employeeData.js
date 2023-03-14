var EmployeeData = {
   calculateTotalSalary () {
    var sal = parseInt(this.salary);
    this.PF = (sal * 14) / 100;
    this.HRA = (sal * 20) / 100;
    this.TotalSalary = sal + this.PF + this.HRA;
   },

   calculateTotalTax () {
    var tax = 0;
    var sal = parseInt(this.salary);
    if(this.gender == "Male") {
        if(sal > 100000){
            tax = 15;
        } else if(sal > 50000){
            tax = 10;
        } else {
            tax = 5;
        }
    } else if (this.gender == "Female"){
        if(sal > 100000) {
            tax = 10;
        } else if(sal > 50000) {
            tax = 5;
        } else {
            console.log("Tax is Free");
        }
    }

    this.totalTax = (tax * this.TotalSalary) / 100;
   },

   displayEmployeeDetails() {
    document.querySelector(".employeepaydetails").style.display = "block";
    document.querySelector("#empname").innerHTML = this.name;
    document.querySelector("#empage").textContent = this.age;
    document.querySelector("#empgender").textContent = this.gender;
    document.querySelector("#empdepartment").innerText = this.department;
    document.querySelector("#empsalary").textContent = this.salary;
    this,this.calculateTotalSalary();
    document.querySelector("#pf").textContent = this.PF;
    document.querySelector("#hra").textContent = this.HRA;
    document.querySelector("#totalsalary").textContent = this.TotalSalary;
    this.calculateTotalTax();
    document.querySelector("#totaltax").textContent = this.totalTax;

   }

};
var getEmployeeData = () => {
   EmployeeData.name = document.querySelector("#name").value;
   EmployeeData.age = document.querySelector("#age").value;
   EmployeeData.gender = document.querySelector("input[name='gender']:checked").value;
   EmployeeData.department = document.querySelector("#department").value;
   EmployeeData.salary = document.querySelector("#salary").value;
   console.log(EmployeeData);
   EmployeeData.displayEmployeeDetails();
}
