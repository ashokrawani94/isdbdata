var EmployeeData = {
    getPfandHra(){
        this.pf = parseInt((14 * this.eSalary)/100);
        this.hra = parseInt((24 * this.eSalary)/100);
    },
    getTax(){
        this.taxValue = 0;
        if(this.eGender == "Male")
        {
            if(this.eSalary>100000){
                this.taxValue = 15;
            }else if (this.eSalary>50000){
                this.taxValue = 10;
            }else if (this.eSalary>25000){
                this.taxValue = 5;
            }else{
                this.taxValue = 0;
            }
        }else{
            if(this.eSalary>100000){
                this.taxValue = 10;
            }else if(this.eSalary>50000){
                this.taxValue = 5;
            }else{
                this.taxValue = 0;
            }
        }
        this.eSalaryTax = (this.taxValue * this.eSalary)/100
        },
    displayData(){
        this.getPfandHra();
        this.getTax();

        document.querySelector("#peName").innerHTML = this.ename;
        document.querySelector("#peDept").innerHTML = this.eDepartment;
        document.querySelector("#peLang").innerHTML = this.eLanguages;
        document.querySelector("#peGender").innerHTML = this.eGender
        document.querySelector("#peSalary").innerHTML = this.eSalary
        document.querySelector("#pePf").innerHTML = this.pf
        document.querySelector("#peHra").innerHTML = this.hra
        document.querySelector("#peTax").innerHTML = this.taxValue
    },

};

var readUserData = () =>{
    EmployeeData.ename = document.querySelector("#eName").value;
    EmployeeData.eDepartment = document.querySelector("#eDepartment").value;
    EmployeeData.eGender = document.querySelector("input[name=gender]:checked").value;
    EmployeeData.eSalary = parseInt(document.querySelector("#salary").value);
    EmployeeData.eLanguages = [];
    
    var lngList = ['java', 'js' ,'cpp'];
    
    console.log(lngList[0])
    for(var i=0; i<lngList.length; i++){
        var id = "#" + lngList[i];
        if(document.querySelector(id).checked){
            EmployeeData.eLanguages.push(document.querySelector(id).value)
        }
    }

    EmployeeData.displayData();
    document.querySelector(".progress").style.display = "block";
    console.log(EmployeeData.ename)
}
 