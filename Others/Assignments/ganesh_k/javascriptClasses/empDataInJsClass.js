var employeList = [];

var readdata =()=>{
    var employdata = {};
    employdata.name = document.querySelector("#ename").value;
    employdata.age = document.querySelector("#eage").value;
    employdata.gender = document.querySelector("input[name='gender']:checked").value;
    employdata.department = document.querySelector("#edept").value;
    employdata.basicsalary = document.querySelector("#ebsalary").value;
    //employdata.basicsalary = parseInt(employdata.basicsalary);
    employdata.pf=document.querySelector("#epf").value;
    employdata.hra=document.querySelector("#ehra").value;

    var emp1 = new empDetails(employdata);
    emp1.displayemployedetails();
    employeList.push(emp1);

    var emp2 = new empDetails(employdata);
    emp2.displayemployedetails();
    employeList.push(emp2);


}

class empDetails {
    constructor(edata){
        this.ename = edata.name;
        this.eage = edata.age;
        this.egender = edata.gender;
        this.edept = edata.department;
        this.ebsalary = edata.basicsalary;
        this.pf = edata.pf;
        this.hra = edata.hra;
    }
    Totalsalary(){
        this.ebsalary=parseInt(this.ebsalary);
        this.pf = (this.ebsalary*this.pf)/100;
        this.hra = (this.ebsalary*this.hra)/100;
        this.totalsalary =this.ebsalary+this.pf+this.hra;
    }
    calculatetax(){
       this.tax = 0;
        if(this.egender=='male'){
            if(this.totalsalary >= 100000){
                this.taxpercent = 15;
            }else if(this.totalsalary >= 50000){
                this.taxpercent = 10;
            }else if(this.totalsalary >= 25000){
                this.taxpercent = 5;
            }else{
                this.taxpercent=0;
            }

        }else{
            if(this.totalsalary >= 100000){
                this.taxpercent = 10;
            }else if(this.totalsalary >= 50000){
                this.taxpercent = 5;
            }else{
                this.taxpercent = 0;
            }
        }
        this.tax = (this.totalsalary*this.taxpercent)/100;
    }
    resetvalue(){
        document.querySelector("#ename").value = "";
        document.querySelector("#eage").value = "";
        document.querySelector("input[name='gender']:checked").value = "";
        document.querySelector("#edept").value = "";
        document.querySelector("#ebsalary").value = "";
        document.querySelector("#epf").value = "";
        document.querySelector("#ehra").value = "";

    }
    displayemployedetails(){
        document.querySelector("#empname").innerHTML = this.ename;
        document.querySelector("#empage").innerHTML = this.eage;
        document.querySelector("#empgender").innerHTML = this.egender;
        document.querySelector("#empdept").innerHTML = this.edept;
        document.querySelector("#empbsalary").innerHTML = this.ebsalary;
        this.Totalsalary();
        document.querySelector("#emppf").innerHTML = this.pf;
        document.querySelector("#emphra").innerHTML = this.hra;
        document.querySelector("#empTsalary").innerHTML = this.totalsalary;
        this.calculatetax();
        document.querySelector("#empTax").innerHTML = this.tax;
        this.resetvalue();
    }
}