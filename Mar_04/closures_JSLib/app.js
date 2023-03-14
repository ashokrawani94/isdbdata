var count = 0;

var doOperation = (optType) => {
    sample();
    count++;
    var userData = {};
    userData.fval = document.querySelector("#fval").value;
    userData.sval = document.querySelector("#sval").value;
    console.log(userData);
    var result;
    switch (optType) {
        case 'add':
            result = myMathUtil.doTheAdditionOfValues(userData);
            break;
        case 'mul':
            result = myMathUtil.doMultiplicaiton(userData);
            break;
        case 'div':
            result = myMathUtil.doDivisionOfValues(userData);
            break;
        case 'sub':
            result = myMathUtil.doSubstraction(userData);
            break;
    }
    var resultMSg = "The " + optType + ' is ' + result;
    document.querySelector("#rBlock").innerHTML = resultMSg;
    document.querySelector("#cblock").innerHTML = count;
} 

function sample() {
    console.log("from app.js")
}