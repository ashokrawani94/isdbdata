class StudentDetails {
    constructor(sdata) {
        this.sname = sdata.sname;
        this.sClass = sdata.sClass;
        this.sGender = sdata.sGender;
        this.marks = sdata.marks;
        this.languages = sdata.languages;
    }
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ;i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }
    getStudentGrade () {
        if (this.avg >= 40) {
            this.grade = 'Student Passed';
        } else {
            this.grade = 'You have a surprise';
        }
    }
    displayStudentDetails(msg) {
        console.log("msg received is " + msg)
        this.getTotalAndAvg();
        this.getStudentGrade();
        document.querySelector("#dsname").innerText = '<b>' + this.sname + '</b>';
        document.querySelector("#dgender").innerHTML = '<b>' + this.sGender + '</b>';
        document.querySelector("#dclass").innerText = this.sClass;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;
        document.querySelector("#lngsKnwn").innerHTML = this.languages.join(", ");
        this.resetDetails();
    }
    resetDetails() {
        document.querySelector("#sname").value = '';
    }
}

var studentDataList = [];

var readUserData = () => {
    var studentData = {};
    studentData.sname = document.querySelector("#sname").value;
    studentData.sClass = document.querySelector("#sclass").value;
    studentData.sGender = document.querySelector("input[name=gender]:checked").value;
    studentData.marks = [];
    studentData.languages = [];
   
    var lngList = ['eng', 'tel', 'hin']   
    for (var i = 0 ; i < lngList.length; i++) {
        var id = '#lng_' + lngList[i];
        if (document.querySelector(id).checked) {
            studentData.languages.push(document.querySelector(id).value)
        }
    }   
    for (var i = 1; i <= 5; i++) {
        var id = '#m' + i;
        var marksValue = document.querySelector(id).value;
        marksValue = parseInt(marksValue);
        studentData.marks.push(marksValue);
    }

    var s1 = new StudentDetails(studentData);
    s1.displayStudentDetails("TEst");
    studentDataList.push(s1);
    document.querySelector(".progressCardBlock").style.display = 'block';
    console.log(studentDataList);
}
