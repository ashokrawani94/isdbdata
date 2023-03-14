export var abc = 10000;

var getPFValue = (bsal) => {
    return (bsal * 14 ) / 100;
}

var getHRAValue = (bsal) => {
    return (bsal * 24 ) / 100;
}

var getTotalSal = (bsal) => {
    var pf = getPFValue(bsal);
    var hra = getHRAValue(bsal);
    var totalSal = bsal + pf + hra;
    return totalSal;
}


var getTotalTax = (bsal) => {
    var totalSal = getTotalSal(bsal);
    var taxpercent;
    if (bsal >= 100000) {
        taxpercent = 10 ;
    } else {
        taxpercent = 5;
    }
    var taxvalue = (totalSal  * taxpercent)/ 100;
    return taxvalue;
}