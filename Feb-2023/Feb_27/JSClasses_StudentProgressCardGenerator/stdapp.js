
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
    studentData.getTotalAndAvg = () => {
        studentData.total = 0;
        for (var i = 0 ;i < studentData.marks.length; i++) {
            studentData.total += studentData.marks[i];
        }
        studentData.avg = studentData.total / studentData.marks.length;
    };

    studentData.getStudentGrade = () => {
        if (studentData.avg >= 40) {
            studentData.grade = 'Student Passed';
        } else {
            studentData.grade = 'You have a surprise';
        }
    };
    studentData.displayStudentDetails = () => {
        studentData.getTotalAndAvg();
        studentData.getStudentGrade();
        document.querySelector("#dsname").innerText = '<b>' + studentData.sname + '</b>';
        document.querySelector("#dgender").innerHTML = '<b>' + studentData.sGender + '</b>';
        document.querySelector("#dclass").innerText = studentData.sClass;
        document.querySelector("#dtotal").innerText = studentData.total;
        document.querySelector("#davg").innerText = studentData.avg;
        document.querySelector("#dgrade").innerText = studentData.grade;
        document.querySelector("#lngsKnwn").innerHTML = studentData.languages.join(", ");

        studentDataList.push(studentData);
        console.log(studentDataList);
        studentData.resetDetails();
    };
    studentData.resetDetails = () => {
        document.querySelector("#sname").value = '';
    }
    studentData.displayStudentDetails();
    document.querySelector(".progressCardBlock").style.display = 'block';
}
