var students = [],
  count = 0,
  deleteCount = 0;

var clear = function () {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.querySelector(
    "input[type=radio][name=gender]:checked"
  ).checked = false;
  document.querySelector("#place").selectedIndex = 0;
  document.querySelectorAll("span").forEach((span) => (span.innerHTML = ""));
};

var nameValidate = function (name) {
  var flag = name.length >= 3;
  if (!flag) {
    document.querySelector("#errorName").innerHTML =
      "Name Must Be At Least 3 Characters";
    document.querySelector("#errorName").style.color = "red";
  } else {
    document.querySelector("#errorName").innerHTML = "Success";
    document.querySelector("#errorName").style.color = "green";
  }
  return flag;
};
var locationValidate = function (location) {
  if (location == "LOCATION") {
    document.querySelector("#errorLocation").innerHTML = "Select Location";
    document.querySelector("#errorLocation").style.color = "red";
  } else {
    document.querySelector("#errorLocation").innerHTML = "Success";
    document.querySelector("#errorLocation").style.color = "green";
  }
  return location != "LOCATION";
};
var genderValidate = function (gender) {
  if (gender) {
    document.querySelector("#errorGender").innerHTML = "Success";
    document.querySelector("#errorGender").style.color = "green";
  } else {
    document.querySelector("#errorGender").innerHTML = "Gender Not Selected.";
    document.querySelector("#errorGender").style.color = "red";
  }
  return gender.length;
};

var ageValidate = function (age) {
  var flag = Boolean(age);
  if (!flag) {
    document.querySelector("#errorAge").innerHTML =
      "Age Must Be Given and Greater Than 0";
    document.querySelector("#errorAge").style.color = "red";
  } else {
    if (parseInt(age) <= 0) {
      flag = false;
      document.querySelector("#errorAge").innerHTML =
        "Age Must Be Given and Greater Than 0";
      document.querySelector("#errorAge").style.color = "red";
    } else {
      flag = true;
      document.querySelector("#errorAge").innerHTML = "Success";
      document.querySelector("#errorAge").style.color = "green";
    }
  }
  return flag;
};

document.querySelector("#aedit").addEventListener("click", function (e) {
  e.preventDefault();
  var hidden = document.querySelector("#sid").value;
  if (hidden) {
    var studentData = students.find((student) => student.counter == hidden);
    (studentData.name = document.querySelector("#name").value),
      (studentData.age = document.querySelector("#age").value),
      (studentData.gender = document.querySelector(
        "input[name='gender']:checked"
      )
        ? document.querySelector("input[name='gender']:checked").value
        : ""),
      (studentData.location = document.querySelector("#place").value);
    var condition =
      nameValidate(studentData.name) &&
      ageValidate(studentData.age) &&
      genderValidate(studentData.gender) &&
      locationValidate(studentData.location);
    if (condition) {
      document.querySelector("#aedit").style.display = "none";
      document.querySelector("#save").style.display = "inline";
      displayData();
      clear();
    }
  }
});

document.querySelector("#save").addEventListener("click", function (e) {
  e.preventDefault();

  var studentData = {};
  (studentData.name = document.querySelector("#name").value),
    (studentData.age = document.querySelector("#age").value),
    (studentData.gender = document.querySelector("input[name='gender']:checked")
      ? document.querySelector("input[name='gender']:checked").value
      : ""),
    (studentData.location = document.querySelector("#place").value);
  var condition =
    nameValidate(studentData.name) &&
    ageValidate(studentData.age) &&
    genderValidate(studentData.gender) &&
    locationValidate(studentData.location);
  if (condition) {
    studentData.counter = count++;
    students.push(studentData);
    displayData();
    clear();
  }
});

var displayData = function () {
  removes();
  var table = document.querySelector(".center");
  var firstTr = document.createElement("tr");
  var th1 = document.createElement("th");
  th1.innerText = "Name";
  firstTr.appendChild(th1);
  var th2 = document.createElement("th");
  th2.innerText = "Age";
  firstTr.appendChild(th2);
  var th3 = document.createElement("th");
  th3.innerText = "Gender";
  firstTr.appendChild(th3);
  var th4 = document.createElement("th");
  th4.innerText = "Location";
  firstTr.appendChild(th4);
  var th5 = document.createElement("th");
  th5.innerText = "Operation";
  firstTr.appendChild(th5);
  table.appendChild(firstTr);
  for (var studentData of students) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td;
    for (var key in studentData) {
      if (key != "counter") {
        td = document.createElement("td");
        td.innerHTML = studentData[key];
        tr.appendChild(td);
      }
    }
    td = document.createElement("td");
    var edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.setAttribute("id", "edit");
    edit.setAttribute("value", studentData.counter);
    edit.setAttribute("onclick", "edits(event)");
    var deletes = document.createElement("button");
    deletes.setAttribute("id", "deletes");
    deletes.setAttribute("onclick", "deletes(event)");
    deletes.setAttribute("value", studentData.counter);
    deletes.innerText = "Delete";
    td.appendChild(edit);
    td.appendChild(deletes);
    tr.appendChild(td);
  }
};

var removes = function () {
  if (document.querySelector("tr")) {
    document.querySelector("table").innerHTML = "";
  }
};

var deletes = function (event) {
  var message = prompt("Are you sure you want to delete type Yes or No");
  if (message == "Yes") {
    document.querySelector("#aedit").style.display = "none";
    var index = parseInt(event.srcElement.attributes.value.value);
    students.splice(index - deleteCount++, 1);
    displayData();
  }
};

var edits = function (event) {
  event.preventDefault();
  var message = prompt("Are you sure you want to edit type Yes or No");
  if (message == "Yes") {
    document.querySelector("#aedit").style.display = "inline";
    document.querySelector("#save").style.display = "none";
    [...document.querySelectorAll("#deletes")].forEach(
      (button) => (button.disabled = true)
    );

    var index = event.srcElement.attributes.value.value;
    var data = students.find((student) => student.counter == index);
    document.getElementById("name").value = data.name;
    document.getElementById("sid").value = index;
    document.getElementById("age").value = data.age;
    document.getElementById("place").value = data.location;
    data.gender == "Male"
      ? (document.querySelector("#gender1").checked = true)
      : (document.querySelector("#gender2").checked = true);
  }
};
