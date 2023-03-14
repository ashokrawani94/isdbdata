var empData = {
    getTotalSal() {
        this.totalSal = 0;
        this.pf = (12 * this.basicSal) / 100;
        this.hra = (10 * this.basicSal) / 100;
        this.totalSal = this.basicSal + this.pf + this.hra;
        this.totalSal = parseInt(this.totalSal);
    },

    getTotalTax() {
        this.totalTax = 0;
        if (this.gender == 'male') {
            if (this.totalSal >= 100000) {
                this.taxPercent = 15;
            } else if (this.totalSal >= 50000) {
                this.taxPercent = 10;
            } else if (this.totalSal >= 25000) {
                this.taxPercent = 5;
            } else {
                this.taxPercent = 0;
            }
        } else {
            if (this.totalSal >= 100000) {
                this.taxPercent = 10;
            } else if (this.totalSal >= 50000) {
                this.taxPercent = 5;
            } else {
                this.taxPercent = 0;
            }
        }
        this.totalTax = (this.totalSal * this.taxPercent) / 100;
    },

    displayEmpData(){
        this.getTotalSal();
        this.getTotalTax();
        console.log("Emp name is "+ this.ename );
        console.log("Emp gender is "+ this.egender );
        console.log("Emp age is "+ this.eage );
        console.log("Emp dept is "+ this.edept );
        console.log("Emp total sal is "+ this.totalSal);
        console.log("Emp total Tax to be paid is "+ this.totalTax);


        document.querySelector("#dename").innerText = this.ename;
        document.querySelector("#dgender").innerHTML = this.egender;
        document.querySelector("#dage").innerText = this.eage;
        document.querySelector("#ddept").innerText = this.edept;
        document.querySelector("#dbasicSal").innerText = this.basicSal;
        document.querySelector("#dtotalSal").innerText = this.totalSal;
        document.querySelector("#dtax").innerText = this.totalTax;
        
    }

};

var readEmpData = () => {
    empData.ename = document.querySelector("#ename").value;
    empData.egender = document.querySelector("input[name=gender]:checked").value;
    empData.eage = document.querySelector("#eage").value;
    empData.edept = document.querySelector("#edept").value;
    empData.basicSal = document.querySelector("#basicSal").value;
    empData.basicSal = parseInt(empData.basicSal);


    console.log(empData);
    empData.displayEmpData();
    document.querySelector(".progressCardBlock").style.display = 'block';


}