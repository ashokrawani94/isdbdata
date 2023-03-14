
var countTableRows = () =>
{
    var len = document.querySelector("#studentTable").ariaRowSpan.length;
    return len;
}

function showhiddenTable()
{
    var len = countTableRows();
    if(len==0){
        document.querySelector(".studentDisplayform").getElementsByClassName.display="none";

    }
}

showhiddenTable();

var addvalues = () => {
    var stuName = document.querySelector("#sName").value;
    var stuAge = document.querySelector("#sAge").value;
    var stuGender = document.querySelector('input["name=Gender"]: checked').value;
    var location = document.querySelector("#location").value;
    var btnvalue = document.querySelector("#btn").value;
    var rIndex = rownumber;
    var getformValue = [stuName, stuAge,stuGender, location, btnvalue];

    addvalues();
}
var createRecords = (arr) =>{
    var tbl =document.querySelector("#studentTable");
    var len = countTableRows();
}

if(arr[4]=="Add"){
    var row1 = document.createElement("tr");
    row1.setAttribute("id","row",+(len+1));
    for(var i = 1; i <=5 ; i++)
    {
        var td1 =document.createElement("td");
        if(i==5){
            var edit = document.createElement("input");
            edit.setAttribute("type", "button");
            edit.setAttribute("id","edit" + (len+1));
            edit.setAttribute("value","edit");
            edit.setAttribute("onclick","edifunction(this)");
            td1.append(edit);

            var delete_btn = document.createElement("input");
            delete_btn.setAttribute("type","button");
            delete_btn.setAttribute("id","edit"+(len+1));
            delete_btn.setAttribute("value","delete");
            delete_btn.setAttribute("onclick","return deletefunction(this)");
            td1.append(delete_btn);
        }
        else{
            td1.innerHTML = arr[i-1];
        }
        row1.append(td1);
        td1.append(row1);
        document.querySelector(".studentDisplayform").style.display="block";
    }
}

