function addstudent() {

    var name = document.sample.name.value
    var age = document.sample.age.value
    var gender = document.sample.gender.value
    var color = document.sample.color.value


    var tr = document.createElement('tr')

    var td1 = tr.appendChild(document.createElement('td'))
    var td2 = tr.appendChild(document.createElement('td'))
    var td3 = tr.appendChild(document.createElement('td'))
    var td4 = tr.appendChild(document.createElement('td'))
    var td5 = tr.appendChild(document.createElement('td'))
    var td6 = tr.appendChild(document.createElement('td'))
    var td7 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = name
    td2.innerHTML = age
    td3.innerHTML = gender
    td4.innerHTML = color
    td5.innerHTML = '<input type="button" name="del" value="Delete"  onclick="delStudent(this);" class="btn btn-danger">'
    td6.innerHTML = '<input type="button" name="edit" value="Edit"  onclick="editStudent(this);" class="btn btn-primary">'
    td7.innerHTML = '<input type="button" name="edit" value="Save"  onclick="saveStudent(this);" class="btn btn-Secondary">'





    document.getElementById("tbl").appendChild(tr)
}


function delStudent(stud) {
    var s = stud.parentNode.parentNode
    s.parentNode.removeChild(s)
}

function editStudent(stud) {
    var name = document.sample.name.value
    var age = document.sample.age.value
    var gender = document.sample.gender.value
    var color = document.sample.color.value
    var s = stud.parentNode.parentNode

    var tr = document.createElement('tr')

    var td1 = tr.appendChild(document.createElement('td'))
    var td2 = tr.appendChild(document.createElement('td'))
    var td3 = tr.appendChild(document.createElement('td'))
    var td4 = tr.appendChild(document.createElement('td'))
    var td5 = tr.appendChild(document.createElement('td'))
    var td6 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = '<input type="text" name="name1">'
    td2.innerHTML = '<input type="number" name="age1">'
    td3.innerHTML = '<input type="radio" name="gender1">'
    td4.innerHTML = '<input type="text" name="color1">'
    td5.innerHTML = '<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td6.innerHTML = '<input type="button" name="edit" value="Edit" onclick="addeditStudent(this);" class="btn btn-primary">'



    document.getElementById("tbl").replaceChild(tr, s)
}
function addUpStud(stud) {
    var name = document.sample.name1.value
    var age = document.sample.age1.value
    var gender = document.sample.gender1.value
    var color = document.sample.color1.value


    var tr = document.createElement('tr')

    var td1 = tr.appendChild(document.createElement('td'))
    var td2 = tr.appendChild(document.createElement('td'))
    var td3 = tr.appendChild(document.createElement('td'))
    var td4 = tr.appendChild(document.createElement('td'))
    var td5 = tr.appendChild(document.createElement('td'))
    var td6 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = name
    td2.innerHTML = age
    td3.innerHTML = gender
    td4.innerHTML = color
    td5.innerHTML = '<input type="button" name="del" value="Delete"  onclick="delStudent(this);" class="btn btn-danger">'
    td6.innerHTML = '<input type="button" name="edit" value="Edit" onclick="editStudent(this);" class="btn btn-primary">'
    td7.innerHTML = '<input type="button" name="edit" value="Save"  onclick="saveStudent(this);" class="btn btn-Secondary">'




    document.getElementById("tbl").replaceChild(tr)
}
function saveStudent() {
    var name = document.sample.name1.value
    var age = document.sample.age1.value
    var gender = document.sample.gender1.value
    var color = document.sample.color1.value


    var tr = document.createElement('tr')

    var td1 = tr.appendChild(document.createElement('td'))
    var td2 = tr.appendChild(document.createElement('td'))
    var td3 = tr.appendChild(document.createElement('td'))
    var td4 = tr.appendChild(document.createElement('td'))
    var td5 = tr.appendChild(document.createElement('td'))
    var td6 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = name
    td2.innerHTML = age
    td3.innerHTML = gender
    td4.innerHTML = color
    td5.innerHTML = '<input type="button" name="del" value="Delete"  onclick="delStudent(this);" class="btn btn-danger">'
    td6.innerHTML = '<input type="button" name="edit" value="Edit" onclick="editStudent(this);" class="btn btn-primary">'

    document.getElementById("tbl").replaceChild(tr)

}