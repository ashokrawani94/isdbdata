var showTheValue = () => {
    stuName = document.querySelector("#sname").value;
    stuAge = document.querySelector("#sage").value;
    stuGender = document.querySelector("input[name=sgender]:checked").value;
    stuLocation = document.querySelector("#sloc").value;

    document.querySelector("#dsname").innerHTML = stuName;
    document.querySelector("#dsage").innerHTML = stuAge;
    document.querySelector("#dsgender").innerHTML = stuGender;
    document.querySelector("#dsloc").innerHTML = stuLocation;
}

var studentDelete = () => {
    if (prompt("just type yes or no") == 'yes') {
        document.querySelector("#dsname").innerHTML = ''
        document.querySelector("#dsage").innerHTML = ''
        document.querySelector("#dsgender").innerHTML = ''
        document.querySelector("#dsloc").innerHTML = ''
    } else {
        document.querySelector("#dsname").innerHTML = stuName;
        document.querySelector("#dsage").innerHTML = stuAge;
        document.querySelector("#dsgender").innerHTML = stuGender;
        document.querySelector("#dsloc").innerHTML = stuLocation;
    }
}

var studentEdit = () => {
    alert("you can edit it now")
    document.querySelector("#dsname").innerHTML = stuName;
    document.querySelector("#dsage").innerHTML = stuAge;
    document.querySelector("#dsgender").innerHTML = stuGender;
    document.querySelector("#dsloc").innerHTML = stuLocation;
}
