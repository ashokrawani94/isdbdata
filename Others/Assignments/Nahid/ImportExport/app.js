import * as val from './js/salaryUtil';

//var edit_btn = document.querySelector("#btn-pf");

//edit_btn.setAttribute("onclick", "editFunction(this)")

console.log("abc")
console.log(abc)
var doOperation = (type) => {
    var result;
    var basicSal = document.querySelector("#bsal").value;
    basicSal = parseInt(basicSal);
    switch (type) {
        case 'pf':
            result = val.getPFValue(basicSal);
            break;
        case 'tsal':
            result = val.getTotalSal(basicSal);
            break;
        case 'ttax':
            result = val.getTotalTax(basicSal);
            break;
    }
    var resultMSg = 'The ' + type + ' value is ' + result
    document.querySelector("#rblock").innerHTML = resultMSg;
}

document.querySelector("#btn-pf").addEventListener("click", ()=>{doOperation('pf')});
document.querySelector("#btn-salary").addEventListener("click", ()=>{doOperation('tsal')});
document.querySelector("#btn-tax").addEventListener("click", ()=>{doOperation('ttax')});