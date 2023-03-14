class Student {
  constructor(...sinfo) {
    this.sname = sinfo[0];
    this.sClass = sinfo[1];
    this.languages = sinfo[2];
    this.sGender = sinfo[3];
    this.marks = sinfo[4];
  }

  getTotalAndAvg() {
    this.total = 0;
    console.log(this.marks);
    for (var i = 0; i < this.marks.length; i++) {
      this.total += this.marks[i];
    }
    console.log(this.total);
    this.avg = this.total / this.marks.length;
  }
  getStudentGrade() {
    if (this.avg >= 40) {
      this.grade = "Student Passed";
    } else {
      this.grade = "You have a surprise";
    }
  }
  displayStudentDetails() {
    this.getTotalAndAvg();
    this.getStudentGrade();
    console.log("Studet name is " + this.sname);
    console.log("Gender " + this.sGender);
    console.log("Total is " + this.total);
    console.log("AVg is " + this.avg);
    console.log("Grade " + this.grade);

    document.querySelector("#dsname").innerHTML = "<b>" + this.sname + "</b>";
    document.querySelector("#dgender").innerHTML =
      "<b>" + this.sGender + "</b>";
    document.querySelector("#dclass").innerText = this.sClass;
    document.querySelector("#dtotal").innerText = this.total;
    document.querySelector("#davg").innerText = this.avg;
    document.querySelector("#dgrade").innerText = this.grade;
    document.querySelector("#lngsKnwn").innerHTML = this.languages.join(", ");
  }
}

var readUserData = () => {
  var sname = document.querySelector("#sname").value;
  var sClass = document.querySelector("#sclass").value;
  var sGender = document.querySelector("input[name=gender]:checked").value;
  var marks = [];
  var languages = [];

  var lngList = ["eng", "tel", "hin"];
  for (var i = 0; i < lngList.length; i++) {
    var id = "#lng_" + lngList[i];
    if (document.querySelector(id).checked) {
      languages.push(document.querySelector(id).value);
    }
  }

  for (var i = 1; i <= 5; i++) {
    var id = "#m" + i;
    var marksValue = document.querySelector(id).value;
    marksValue = parseInt(marksValue);
    marks.push(marksValue);
  }

  var student = new Student(sname, sClass, languages, sGender, marks);

  student.displayStudentDetails();
  document.querySelector(".progressCardBlock").style.display = "block";
};
