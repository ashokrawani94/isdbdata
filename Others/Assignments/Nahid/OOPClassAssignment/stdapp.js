class StudentData {
    constructor(sData){
        this.sName = sData.name;
        this.sGender = sData.Gender;
        this.sClass = sData.Class;
        this.marks = sData.marks;
        this.languages = sData.languages;
    }
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ;i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }
    getStudentGrade() {
        if (this.avg >= 40) {
            this.grade = 'Student Passed';
        } else {
            this.grade = 'You have a surprise';
        }
    }
    displayStudentDetails() {
        this.getTotalAndAvg();
        this.getStudentGrade();        

        document.querySelector("#stdName").innerText = this.sName;
        document.querySelector("#gender").innerHTML = '<b>' + this.sGender + '</b>';
        document.querySelector("#class").innerText = this.sClass;
        document.querySelector("#total").innerText = this.total;
        document.querySelector("#avg").innerText = this.avg;
        document.querySelector("#grade").innerText = this.grade;
        document.querySelector("#lngsKnwn").innerHTML = this.languages.join(", ")
    }

}

var readUserData = () => {
    var stData = {};
    stData.name = document.querySelector("#sname").value;
    stData.Class = document.querySelector("#sclass").value;
    stData.Gender = document.querySelector("input[name=gender]:checked").value;
    stData.marks = [];
    stData.languages = [];
    
    var lngList = document.querySelectorAll('input[name=language]:checked');    
    for (var i = 0 ; i < lngList.length; i++)
    {
        stData.languages.push(lngList[i].value);        
    }
    
    for (var i = 1; i <= 5; i++) {
        var id = '#m' + i;
        var marksValue = document.querySelector(id).value;
        marksValue = parseInt(marksValue);
        stData.marks.push(marksValue);
    }
  
    var obj = new StudentData(stData);

    console.log(obj);
    obj.displayStudentDetails();
    document.querySelector(".progressCardBlock").style.display = 'block';

    //document.write("Hello every one")
}

readUserData();