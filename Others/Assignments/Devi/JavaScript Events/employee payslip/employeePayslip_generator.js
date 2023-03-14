var empData = {
    getTotal () {
        this.totalSal = 0;

        this.pf = (12 * this.basicsal ) / 100;
        this.hra = (15 * this.basicsal) / 100;
        this.totalSal = this.pf + this.hra + this.basicsal;
    },
    getTax () {
            if ( this.gender == 'male') { 
                if (this.totalSal >= 300000){
                    taxPercent = 10;
                }else {
                    taxPercent = 5;
                }
            }else {
                if (this.totalSal >= 300000) {
                    taxPercent = 5;
                }else {
                    taxPercent = 0;
                }
            }
            this.totalTax = (this.totalSal * taxPercent) / 100;
    },

    displayEmpDetails () {
       this.getTotal();
       this.getTax();
       console.log(this)

            console.log("Emp name is "+ this.ename );
            console.log("Emp gender is "+ this.gender );
            console.log("Emp no is "+ this.eno );
            console.log("Emp dept is "+ this.edept);
            console.log("Basicsalary is "+ this.ebasicsal);
            console.log("Emp total sal is "+ this.totalSal);
            console.log("Emp total Tax to be paid is "+ this.totalTax);
    
    
            document.querySelector(".payslip_block").style.display = 'block';
            document.querySelector("#rname").innerHTML = this.ename;
            document.querySelector("#rno").innerText = this.eno;
            document.querySelector("#rbank").innerHTML = this.ebank;
            document.querySelector("#racno").innerHTML = this.eacno;
            document.querySelector("#rgender").innerHTML = this.gender;
            document.querySelector("#rdept").innerText = this.edept;
            document.querySelector("#rbsal").innerHTML = this.ebasicsal;
            document.querySelector("#rpf").innerHTML = this.pf;
            document.querySelector("#rhra").innerHTML = this.hra;
            document.querySelector("#rtotalSal").innerText = this.totalSal;
            document.querySelector("#rtotalTax").innerText = this.totalTax; 
        },
}
        
  var readUserData = () => {
        empData.ename = document.querySelector("#ename").value;
        empData.eno = document.querySelector("#eno").value;
        empData.ebank = document.querySelector("#ebank").value;
        empData.eacno = document.querySelector("#eacno").value;
        empData.edept = document.querySelector("#edept").value;
        empData.gender = document.querySelector('input[name=gender]:checked').value;
        empData.basicsal = document.querySelector("#ebasicsal").value;
        empData.basicsal = parseInt(empData.basicsal);
        
        console.log(empData);
        empData.displayEmpDetails();
        document.querySelector(".payslip_block").style.display = 'block';

    }
        
               
