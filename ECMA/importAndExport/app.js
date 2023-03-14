import abc from './salaryUtil';

console.log("abc")
console.log(abc)
var doOperation = (type) => {
    var result;
    var basicSal = document.querySelector("#bsal").value;
    basicSal = parseInt(basicSal);
    switch (type) {
        case 'pf':
            result = getPFValue(basicSal);
            break;
        case 'tsal':
            result = getTotalSal(basicSal);
            break;
        case 'ttax':
            result = getTotalTax(basicSal);
            break;
    }
    var resultMSg = 'The ' + type + ' value is ' + result
    document.querySelector("#rblock").innerHTML = resultMSg;
}