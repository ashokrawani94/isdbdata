var employeeData ={
    claculateSalary(){
        this.pf =(14*this.basicSalary)/100;
        this.hra =(12*this.basicSalary)/100;
        this.totalSalary = this.basicSalary+this.pf+this.hra;
        
    },
    claculateTax(){
        var tax =0;
        if(this.gen == "Male")
        {
            if(this.basicSalary>100000)
            {
                tax = 15;
            }
            else if(this.basicSalary>50000)
            {
                tax = 10;
            }
            else if(this.basicSalary>25000)
            {
                tax = 5;
            }
            else
            {
                tax = 0;
            }
        }
        else if(this.gen=="Female")
        {
            if(this.basicSalary>100000)
            {
                tax = 10;
            }
            else if(this.basicSalary>50000)
            {
                tax = 5;
            }
            else
            {
                tax = 0;
            }
        }
        this.totalTax = (tax*this.totalSalary)/100;
    },
    displayEmployeeDetails(){
        this.claculateSalary();
        this.claculateTax();
        document.querySelector("#sEmpName").innerHTML=this.name;
        document.querySelector("#sEmpAge").innerHTML=this.age;
        document.querySelector("#sEmpGen").innerHTML=this.gen;
        document.querySelector("#sEmpDep").innerHTML=this.depatment;
        document.querySelector("#sEmpBs").innerHTML=this.basicSalary;
        document.querySelector("#sEmpPf").innerHTML=this.pf;
        document.querySelector("#sEmpHra").innerHTML=this.hra;
        document.querySelector("#sEmpTs").innerHTML=this.totalSalary;
        document.querySelector("#sEmpTx").innerHTML=this.totalTax;
    }
}
var readEmployeeDetails =() =>{
    employeeData.name= document.querySelector("#empName").value;
    employeeData.age= document.querySelector("#empAge").value;
    employeeData.gen= document.querySelector("input[name=gender]:checked").value;
    employeeData.depatment = document.querySelector("#empDep").value;
    employeeData.basicSalary = document.querySelector("#empBs").value;
    employeeData.basicSalary = parseInt(employeeData.basicSalary)
    console.log(employeeData);
    employeeData.displayEmployeeDetails();
    document.querySelector(".detailsCard").style.display = "block";
    
}
