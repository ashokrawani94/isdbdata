var empolyeeData = {
    getPfAndHra() {
        this.pf = parseInt((14 * this.esal) / 100);
        this.hra = parseInt((24 * this.esal) / 100);

        this.total = this.pf + this.hra + this.esal
    },

    getTotalTax(){
        this.taxValue = 0;
        if(this.egender == 'Male'){
            if(this.total>100000){
                this.taxValue = 15;
            }else if (this.total>50000){
                this.taxValue = 10;
            }else if (this.total>25000){
                this.taxValue = 5;
            }else{
                this.taxValue = 0;
            }
        }else{
            if(this.total>100000){
                this.taxValue = 10;
            }else if(this.total>50000){
                this.taxValue = 5;
            }else{
                this.taxValue = 0;
            }
        }
        this.totalTax = (this.taxValue * this.total)/100
    },

    displayEpolyeedetail(){
        this.getPfAndHra();
        this.getTotalTax();

        document.querySelector("#dename").innerHTML = this.ename
        document.querySelector("#dedep").innerHTML = this.edep
        document.querySelector("#degender").innerHTML = this.egender
        document.querySelector("#desal").innerHTML = this.esal
        document.querySelector("#depf").innerHTML = this.pf
        document.querySelector("#dehra").innerHTML = this.hra
        document.querySelector("#detsal").innerHTML = this.total
        document.querySelector("#detax").innerHTML = this.totalTax
    }
}

var showTheValue = () => {
    empolyeeData.ename = document.querySelector("#ename").value
    empolyeeData.edep = document.querySelector("#edep").value
    empolyeeData.egender = document.querySelector("input[name=egender]:checked").value
    empolyeeData.esal = parseInt(document.querySelector("#esal").value)
    
    empolyeeData.displayEpolyeedetail();
    document.querySelector(".abc").style.display = 'block'
}
