var EmployeeData = {
    calculateTotalSalary(){
        var sal = parseInt(this.salary);
        this.PF = (14 * sal)/100;
        this.HRA = (14 * sal)/100;
        this.totalSalary = sal + this.PF + this.HRA;
    },
    calculateTotalTax(){
        var tax = 0;
        var sal = parseInt(this.salary);
        if(this.gender == 'Male')
        {
            if(sal >100000)
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
    },
    displayEmployeeDetails(){
        document.querySelector(".paySlipContainer").style.display = "block";
        document.querySelector("#empname").innerHTML = this.ename;
        document.querySelector("#empgender").textContent = this.gender;
        document.querySelector("#empdept").innerText = this.department;
        document.querySelector("#empSalary").textContent = this.salary;
        this.calculateTotalSalary();
        document.querySelector("#pf").textContent = this.PF;
        document.querySelector("#hra").textContent = this.HRA;
        document.querySelector("#totalSalary").textContent = this.totalSalary;
        this.calculateTotalTax();
        document.querySelector("#totalTax").textContent = this.totalTax; 
    }
};

var ReadEmployeeDaya = () => {
    EmployeeData.ename = document.querySelector("#ename").value;
    EmployeeData.gender = document.querySelector("input[name='gender']:checked").value;
    EmployeeData.department = document.querySelector("#department").value;
    EmployeeData.salary = document.querySelector("#salary").value;
    console.log(EmployeeData);
    EmployeeData.displayEmployeeDetails();
}

