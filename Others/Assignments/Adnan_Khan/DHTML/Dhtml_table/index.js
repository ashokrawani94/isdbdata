// var displayDetails = () =>{
    
//     getUserData();
    
//     document.querySelector(".displayDetails").style.display = "block"
// }

var getUserData = () =>{
    var sName = document.querySelector("#sName").value;
    var sAge = document.querySelector("#sAge").value;
    var sGender = document.querySelector('input[name="gender"]:checked').value;
    var sLocation = document.querySelector("#Location").value;
    var addBtn = document.createElement("input");
    let rIndex = rowNumber;  
    var Data = [sName,sAge,sGender,sLocation, addBtn, rIndex];
    showData(Data)

     sName = document.querySelector("#sName").value = "";
     sAge = document.querySelector("#sAge").value = "";
     sGender = document.querySelector('input[name="gender"]:checked').value= "";
     sLocation = document.querySelector("#Location").value = "";
}

var showData = (Data) =>{

    // console.log(Data)
    var table = document.querySelector("#studentTable");
    var row1 = document.createElement("tr");
    var rowIndex = table.rows.length

    var addBtn = document.querySelector("#Add-btn")
    if(addBtn.value == "Add") {
    for(var i=0; i< 5; i++){
        var td =  document.createElement("td")
        
        if(i==4){
            var editBtn = document.createElement("input");
            editBtn.setAttribute("type", "button")
            editBtn.setAttribute("id", "editBtn")
            editBtn.setAttribute("value", "Edit")
            editBtn.setAttribute("onclick", "editData(this)")
            td.append(editBtn)
            
            var deleteBtn = document.createElement("input");
            deleteBtn.setAttribute("type", "button")
            deleteBtn.setAttribute("id", "dltBtn")
            deleteBtn.setAttribute("value", "Delete")
            deleteBtn.setAttribute("onclick", "deleteData(this)")
            td.append(deleteBtn)
        }else{

            td.innerHTML = Data[i]; 
        }
        row1.append(td);
        table.append(row1);
        document.querySelector(".displayDetails").style.display = "block"
    }
}
else if(addBtn.value == "Update") {
    // addBtn.setAttribute("onclick", "updateData()")
    var rIndex = Data[5]
    table.rows[rIndex].cells[0].innerHTML = Data[0]
    table.rows[rIndex].cells[1].innerHTML = Data[1]
    table.rows[rIndex].cells[2].innerHTML = Data[2]
    table.rows[rIndex].cells[3].innerHTML = Data[3]

    

    // rowIndex.cells[0].innerText = sName
} 
}

var deleteData = (element)=>{
    var length = document.querySelector("#studentTable").rows.length;

    console.log(length)
    element.parentElement.parentElement.remove()
    length--
    if(length==1){
        document.querySelector(".displayDetails").style.display = "none"
        // console.log("Hello")

    }
}

var rowNumber
var editData = (element) =>{
    
    document.querySelector("#sName").value =  element.parentElement.parentElement.cells[0].innerText
    document.querySelector("#sAge").value =  element.parentElement.parentElement.cells[1].innerText
    document.querySelector("#sGender").value =  element.parentElement.parentElement.cells[2].innerText
    document.querySelector("#Location").value =  element.parentElement.parentElement.cells[3].innerText

    var rowValue = element.parentElement.parentElement
    rowNumber = rowValue.rowIndex;
    

    var updateBtn = document.querySelector("#Add-btn")
    updateBtn.value = "Update"

    var CurrentRow = element.parentElement.parentElement
    // updateData(element)


    //  element.parentElement.parentElement.cells[0].innerText = document.querySelector("#sName").value
   
}

// var updateData = (element)  =>{
//     var name = document.querySelector("#sName").value
//     console.log(element.parentElement.parentElement)
// }
