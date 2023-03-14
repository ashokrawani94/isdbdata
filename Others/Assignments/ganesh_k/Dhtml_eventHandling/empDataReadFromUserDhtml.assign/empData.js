var empData = {
    calPfAndHra(){
        var bsalary =parseInt(empData.bsalary);
         empData.pf=(empData.pf*empData.bsalary)/100;
         empData.hra=(empData.hra*empData.bsalary)/100;
    },
    getTotalSalary(){
        empData.totalsalary=empData.bsalary+empData.pf+empData.hra;
    },
    getTax(){
       // var taxpercent=0;
        if(empData.egender=='male'){
            if(empData.totalsalary >= 100000){
                empData.taxpercent=15;
            }else if(empData.totalsalary >= 50000){
                empData.taxpercent=10;
            }else if(empData.totalsalary >= 25000){
                empData.taxpercent=5;
            }else{
                empData.taxpercent=0;
            }
        }else{
            if(empData.totalsalary >= 100000){
                empData.taxpercent=10;
            }else if(empData.totalsalary >= 50000){
                empData.taxpercent=5;
            }else{
                empData.taxpercent=0;
            }
        }
      empData.tax=(empData.totalsalary*empData.taxpercent)/100;
    },
    displayEmpData(){
        empData.calPfAndHra();
        empData.getTotalSalary();
        empData.getTax();
        document.querySelector("#empname").innerHTML=empData.name;
        document.querySelector("#empage").innerHTML=empData.age;
        document.querySelector("#empgender").innerHTML=empData.egender;
        document.querySelector("#empdept").innerHTML=empData.dept;
        document.querySelector("#empbsalary").innerHTML=empData.bsalary;
        document.querySelector("#emppf").innerHTML=empData.pf;
        document.querySelector("#emphra").innerHTML=empData.hra;
        document.querySelector("#empTsalary").innerHTML=empData.totalsalary;
        document.querySelector("#empTax").innerHTML=empData.tax;

        console.log(empData);

    }

}
var empDetails=function(){
    empData.name=document.querySelector("#ename").value;
    empData.age =document.querySelector("#eage").value;
    empData.egender = document.querySelector("input[name='gender']:checked").value;
    empData.dept =document.querySelector("#edept").value;
    empData.bsalary =document.querySelector("#ebsalary").value;
    empData.bsalary=parseInt(empData.bsalary);
    empData.pf =document.querySelector("#epf").value;
    empData.hra =document.querySelector("#ehra").value;

    empData.displayEmpData();
    document.querySelector("#salaryData").style.display='block';
}
