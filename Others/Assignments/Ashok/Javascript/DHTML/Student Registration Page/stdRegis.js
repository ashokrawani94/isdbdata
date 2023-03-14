// Find Button
// var btn = document.querySelector("#btn");
// btn.addEventListener("click", stdData);


//Create Function
var selectedTr = null;
var stdData = () => {
    var transferData = readData();
    if(selectedTr == null){
        insertData(transferData);
    }else{
        upDate(transferData); 
        selectedTr = null;
    }
    
    resetData();

};

//Read data
var readData = () =>{
    var stdData = {}
    stdData.Name = document.querySelector("#sname").value;
    stdData.Age = document.querySelector("#sage").value;
    stdData.Gender = document.querySelector("input[name=gender]:checked").value;
    stdData.location = document.querySelector("#loc").value;
    return stdData;

}

//Insert data into table
var insertData = (x) => {
    var table = document.querySelector(".list");
    var tr = table.insertRow(table.length);
    var td1 = tr.insertCell(0);
    var td2 = tr.insertCell(1);
    var td3 = tr.insertCell(2);
    var td4 = tr.insertCell(3);
    var td5 = tr.insertCell(4);
    var td6 = tr.insertCell(5);

    //Display table data
    td1.innerHTML = table.rows.length-1;
    td2.innerHTML = x.Name;
    td3.innerHTML = x.Age;
    td4.innerHTML = x.Gender;
    td5.innerHTML = x.location;
    td6.innerHTML = "<a class='edit' onClick='edit(this)'>Edit</a> / <a onclick='dlt(this)'>Delete</a>";
}

//Reset Input data
var resetData = () =>{
    document.querySelector("#sname").value = "";
    document.querySelector("#sage").value = "";
    document.querySelector("input[name=gender]:checked").value = "";
    document.querySelector("#loc").value = "";
}
//Edit data
var edit = (y) =>{
    selectedTr = y.parentElement.parentElement;
    document.querySelector("#sname").value = selectedTr.cells[1].innerHTML ;
    document.querySelector("#sage").value = selectedTr.cells[2].innerHTML;
    document.querySelector("input[name=gender]:checked").value = selectedTr.cells[3].innerHTML;
    document.querySelector("#loc").value = selectedTr.cells[4].innerHTML;

}
//Update data
var upDate = (z) =>{
    selectedTr.cells[1].innerHTML = z.Name;
    selectedTr.cells[2].innerHTML = z.Age;
    selectedTr.cells[3].innerHTML = z.Gender;
    selectedTr.cells[4].innerHTML = z.location;
}
//Delete data from table
var dlt = (dl) =>{
    var deleteRow = dl.parentElement.parentElement;
    deleteRow.remove();
    console.log(deleteRow);
}



