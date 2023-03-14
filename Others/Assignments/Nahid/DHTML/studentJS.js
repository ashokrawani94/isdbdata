var countTableRows = () =>{
    var len = document.querySelector("#studentTable").rows.length-1;
    return len;
}

function showHideStudentTable()
{
    var len = countTableRows();
    if(len==0)
    {
       document.querySelector(".studentDisplayForm").style.display="none";
    }
    // else
    // document.querySelector(".studentDisplayForm").style.display="block";
}

showHideStudentTable();

/*Method to get get value values from student form */
let addDetails = () =>{
    let sname = document.querySelector("#sName").value;
    let age = document.querySelector("#sAge").value;   
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let location = document.querySelector("#location").value;
    let btnValue = document.querySelector("#Add-btn").value;
    let rIndex = rowNumber;    
    var getFormValue = [sname,age,gender,location,btnValue, rIndex];

    /*createRecords method call during new record creation and row updation*/
    createRecords(getFormValue);
}

/*method to add new row in a given table and also working for row updation */
let createRecords = (arr) =>{
    var tbl = document.querySelector("#studentTable");
    var len = countTableRows();

    

    if(arr[4]=="Add") //condition to check whether it is for new row, arr[4] indicating Add button value
    {
        var row1 = document.createElement("tr");
        row1.setAttribute("id", "row" + (len+1));
        for(var i = 1; i <= 5 ; i++)
        {
            var td1 = document.createElement("td");
            //condition for creation of edit and delete button inside new row
            if(i==5){
                var edit_btn = document.createElement("input");
                edit_btn.setAttribute("type", "button");
                edit_btn.setAttribute("id", "Edit" + (len+1));
                edit_btn.setAttribute("value", "edit");
                edit_btn.setAttribute("onclick", "editFunction(this)")          
                td1.append(edit_btn);

                var delete_btn = document.createElement("input");
                delete_btn.setAttribute("type", "button");
                delete_btn.setAttribute("id", "Delete" + (len+1));
                delete_btn.setAttribute("value", "delete");
                delete_btn.setAttribute("onclick", "return deleteFunction(this)")
                td1.append(delete_btn);
            }
            else{
                td1.innerHTML = arr[i-1];
            }
            row1.append(td1);
            tbl.append(row1);
            document.querySelector(".studentDisplayForm").style.display="block";
        }
        
     }
    else if(arr[4]=="Update") //condition to check whether it is for updation
    {
        var rIndex = arr[5];
        tbl.rows[rIndex].cells[0].innerHTML = arr[0];
        tbl.rows[rIndex].cells[1].innerHTML = arr[1];
        tbl.rows[rIndex].cells[2].innerHTML = arr[2];
        tbl.rows[rIndex].cells[3].innerHTML = arr[3];
        document.querySelector("#Add-btn").value = "Add";
    }
    clearFormData();
}

var clearFormData = () =>{
    document.querySelector("#sName").value = '';
    document.querySelector("#sAge").value = '';   
    document.querySelector("#location").value = '-1';
    
    var rbl = document.querySelectorAll("input[type=radio]");
    for(var i = 0; i < rbl.length; i++){
        rbl[i].checked = false;
    }
}





var rowNumber;/*variable to fetch rowIndex*/

/**method is created for edit button event call**/
var editFunction = (element)=>{
        var rowValue = element.parentElement.parentElement; //get rowIndex which is clicked
        rowNumber = rowValue.rowIndex;
        document.querySelector("#sName").value = rowValue.getElementsByTagName('td')[0].innerHTML;
        document.querySelector("#sAge").value = rowValue.getElementsByTagName('td')[1].innerHTML;         
         
         var rbl = document.querySelectorAll('input[name="gender"]');
         for(var i = 0; i < rbl.length; i++)
         {
            if(rbl[i].value == rowValue.getElementsByTagName('td')[2].innerHTML)
            {    
                rbl[i].checked = true;
            }
         }
        
        document.querySelector("#location").value = rowValue.getElementsByTagName('td')[3].innerHTML;
        document.querySelector("#Add-btn").value = "Update";
    }

    /**method is created for delete button event call**/
    var deleteFunction = (element)=>{
        rowNumber = element.parentElement.parentElement.rowIndex;        
        if(confirm("Are you sure to want to Delete?")==true)
        {
           document.getElementById("studentTable").deleteRow(rowNumber);
        //    var len = countTableRows();
        //    if(len==0){
        //    document.querySelector(".studentDisplayForm").style.display="none";
        //    }
           showHideStudentTable();
           return true;
        }
        else
        {
          return false;
        }
        

    }

  /********************************experimental functions but not used in html******************************************/
var fetchTableData = () =>{
    var table = document.querySelector("#studentTable");
    for (var i = 0, row; row = table.rows[i]; i++) 
    {       
     var inputBtn = table.rows[i].cells[4].querySelectorAll("input[type='button']");     
     if(inputBtn != null){
        for(var j =0; j <inputBtn.length; j++)
        {  
            if(inputBtn[j].getAttributeNode('value').nodeValue=='edit')
            {
             document.querySelector("input[value='edit']").setAttribute("onclick", "editFunction(this)");//"editFunction(event)");
            }
            if(inputBtn[j].getAttributeNode('value').nodeValue=='delete'){
            document.querySelector("input[value='delete']").setAttribute("onclick", "deleteFunction()");
            }
        }     
     }
  }
}

// var editFunction = (event)=>{
//     var rowName = event.target.parentNode.parentNode.id;
//     alert(rowName)
// }



// function show(x) {
//    // alert("click");
//     //var rowId = console.log(window.event.target.parentNode.parentNode.id);
//     alert(x.rowIndex)
// }
/*experimental functions*/