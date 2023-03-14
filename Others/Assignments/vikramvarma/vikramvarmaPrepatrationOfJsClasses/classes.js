document.querySelector('#btn').addEventListener('click', function () {
  class StudentData {
    constructor() {
      this.name = document.querySelector('#sname').value;
      this.age = document.querySelector('#sage').value;
      this.gender = document.querySelector('#sgender').value;
      this.class = document.querySelector('#sclass').value;
      this.marks = [
        parseInt(document.querySelector('#m1').value),
        parseInt(document.querySelector('#m2').value),
        parseInt(document.querySelector('#m3').value),
      ];
    }
    calcData(s1) {
      var total = s1.marks[0] + s1.marks[1] + s1.marks[2];
      var average = total / 3;
      var grade;
      if (average >= 75) {
        grade = 'A+';
      } else if (average >= 65) {
        grade = 'A-';
      } else if (average <= 50) {
        grade = 'f';
      }
      document.querySelector('#dtotal').innerHTML = total;
      document.querySelector('#davg').innerHTML = average;

      document.querySelector('#dgrade').innerHTML = grade;
    }
    showData(s1) {
      this.calcData(s1);
      //console.log(total);
      document.querySelector('#dname').innerHTML = s1.name;
      document.querySelector('#dage').innerHTML = s1.age;
      document.querySelector('#dgender').innerHTML = s1.gender;
      document.querySelector('#dclass').innerHTML = s1.class;
    }
  }
  var s1 = new StudentData();
  s1.showData(s1);
});
