var employeeDetails = {
    calculateTotalSalary(){
        var sal = parseInt(this.Employeesalary);
        this.pf = (14 * sal)/100;
        this.hra = (24 * sal)/100;
        this.totalsalary = sal + this.pf + this.hra;
    },
    calculateTotalTax(){
        var tax = 0;
        var sal = parseInt(this.Employeesalary);
        if(this.Employeegender == 'Male')
        {
            if(sal >100000)
            {
                tax = 20;
            }
            else if(sal > 50000)
            {
                tax = 15;
            }
            else if(sal > 25000)
            {
                tax = 10;
            }
        }
        else if(this.Employeegender == 'Female')
        {
            if(sal > 100000)
            {
                tax = 15;
            }
            else if(sal > 50000)
            {
                tax = 10;
            }
             else if(sal >= 25000)
            {
                tax = 5;
            }
        }
        this.totaltax = (tax * this.totalsalary) / 100;
    },


displayEmployeeDetails(){

    document.querySelector(".paySlipContainer").style.display = "block";
    document.querySelector("#empname").innerHTML = this.Employeename;
    document.querySelector("#empgender").innerHTML = this.Employeegender;
    document.querySelector("#empdept").innerHTML = this.Employeedepartment;
    document.querySelector("#empsalary").innerHTML = this.Employeesalary;
    this.calculateTotalSalary();
    document.querySelector("#pf").innerHTML = this.pf;
    document.querySelector("#hra").innerHTML = this.hra;
    document.querySelector("#totalsalary").innerHTML = this.totalsalary;
    this.calculateTotalTax();
    document.querySelector("#totaltax").innerHTML = this.totaltax;
}

};

var readEmployeeDetails = () => {
    employeeDetails.Employeename = document.querySelector("#ename").value;
    employeeDetails.Employeegender = document.querySelector("input[name = 'gender']:checked").value;
    employeeDetails.Employeedepartment = document.querySelector("#edept").value;
    employeeDetails.Employeesalary = document.querySelector("#esalary").value;
    console.log(employeeDetails);
    employeeDetails.displayEmployeeDetails();

}