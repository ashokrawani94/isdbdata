class Employee{
   constructor(empData){
     this.name = empData.ename;
     this.gender = empData.gender;
     this.dept = empData.department;
     this.basicSalary = empData.salary;
   }
   calculateTotalSalary(){
      var sal = parseInt(this.basicSalary);
      this.PF = (14 * sal)/100;
      this.HRA = (14 * sal)/100;
      this.totalSalary = sal + this.PF + this.HRA;
   }

   calculateTotalTax(){
    var tax = 0;
    var sal = this.basicSalary;
      if(this.gender == 'Male')
      {
          if(sal > 100000)
          {
              tax = 20;
          }
          else if(sal > 50000)
          {
              tax = 15;
          }
          if(sal > 25000)
          {
              tax = 10;
          }
      }
      else if(this.gender == 'Female')
      {
          if(sal > 100000)
          {
              tax = 15;
          }
          else if(sal > 50000)
          {
              tax = 10;
          }
          if(sal >= 25000)
          {
              tax = 5;
          }
      }
        this.totalTax = (tax * this.totalSalary) / 100;
    }

    resetValue(){
        document.querySelector("#ename").value = "";
        document.querySelector("input[name='gender']:checked").checked = false;
        document.querySelector("#department").value = "";
        document.querySelector("#salary").value = "";
    }

    displayEmployeeDetails(){
      document.querySelector(".paySlipContainer").style.display = "block";
      document.querySelector("#empname").innerHTML = this.name;
      document.querySelector("#empgender").textContent = this.gender;
      document.querySelector("#empdept").innerText = this.dept;
      document.querySelector("#empSalary").textContent = this.basicSalary;
      this.calculateTotalSalary();
      document.querySelector("#pf").textContent = this.PF;
      document.querySelector("#hra").textContent = this.HRA;
      document.querySelector("#totalSalary").textContent = this.totalSalary;
      this.calculateTotalTax();
      document.querySelector("#totalTax").textContent = this.totalTax;
      this.resetValue(); 
  }
  
}
var employeeList = [];
var empData = {};
var ReadEmployeeData = () => {
    empData.ename = document.querySelector("#ename").value;
    empData.gender = document.querySelector("input[name='gender']:checked").value;
    empData.department = document.querySelector("#department").value;
    empData.salary = document.querySelector("#salary").value;    
    
    var obj = new Employee(empData);    
    obj.displayEmployeeDetails();
    employeeList.push(obj);
    console.log(employeeList);
}





