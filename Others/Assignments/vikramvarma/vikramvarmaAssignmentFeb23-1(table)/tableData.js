"use strict";
var studentDetail = [];
document.querySelector("#btn").addEventListener("click", function () {
  //Reading data
  var studentData = {};
  studentData.sname = document.querySelector("#stuname").value;
  studentData.sage = document.querySelector("#stuage").value;
  studentData.slocation = document.querySelector("#stuloc").value;
  studentData.sgender = document.querySelector(
    "input[name=gender]:checked"
  ).value;

  //creatingElements
  var maintr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var editbtn = document.createElement("input");
  var deltbtn = document.createElement("input");

  //creating attributes for edit and delete button
  maintr.setAttribute("class", "hidden");
  editbtn.setAttribute("type", "button");
  editbtn.setAttribute("value", "Edit");
  editbtn.setAttribute("id", "editbutton");
  deltbtn.setAttribute("type", "button");
  deltbtn.setAttribute("value", "Delete");
  deltbtn.setAttribute("id", "deletebtn");

  //appending tags
  td5.append(editbtn);
  td5.append(deltbtn);
  maintr.append(td1);
  maintr.append(td2);
  maintr.append(td3);
  maintr.append(td4);
  maintr.append(td5);
  document.querySelector("tbody").append(maintr);
  studentDetail.push(studentData);
  //giving data to created elements
  td1.innerText = studentData.sname;
  td2.innerText = studentData.sage;
  td3.innerText = studentData.sgender;
  td4.innerText = studentData.slocation;

  //creating delete and edit buttons
  document.querySelector("#editbutton").addEventListener("click", function () {
    document.getElementById("stuname").value = studentData.sname;
    document.getElementById("stuage").value = studentData.sage;
    document.getElementById("stuloc").value = studentData.slocation;
  });
  document.querySelector("#deletebtn").addEventListener("click", function () {
    document.querySelector("tbody").removeChild(maintr);
  });

  //clearing input elements
  document.getElementById("stuname").value = "";
  document.getElementById("stuage").value = "";
  document.getElementById("stuloc").value = "";
  document.getElementById("radio").checked = false;
  document.getElementById("radio2").checked = false;
  console.log(studentDetail);
});
