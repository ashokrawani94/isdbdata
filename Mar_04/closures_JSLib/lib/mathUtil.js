
var myMathUtil = (function() {
    var count = 0;

    function sample() {
        console.log("from library")
    }
    /**
     * function used to find the sum of values
     * @param {*} data , holds fval and sval 
     * @returns  the sum of values
     */
    var doAddition = (data) => {
        count += 2;
        data.fval = parseInt(data.fval);
        data.sval = parseInt(data.sval);
        var result;
        result = data.fval + data.sval;
        return result;
    }

    /**
     * function used to find the Sub of values
     * @param {*} data , holds fval and sval 
     * @returns  the sub of values
     */
    var doSubstraction = (data) => {
        count += 2;
        data.fval = parseInt(data.fval);
        data.sval = parseInt(data.sval);
        var result;
        result = data.fval - data.sval;
        return result;
    }


    /**
     * function used to find the Division of values
     * @param {*} data , holds fval and sval 
     * @returns  the div of values
     */
    var doDivision = (data) => {
        count += 2;
        data.fval = parseInt(data.fval);
        data.sval = parseInt(data.sval);
        var result;
        result = data.fval / data.sval;
        return result;
    }

    return {
        doTheAdditionOfValues (data) {
            return doAddition(data);
        },
        doMultiplicaiton(data) {
            count += 2;
            data.fval = parseInt(data.fval);
            data.sval = parseInt(data.sval);
            var result;
            result = data.fval * data.sval;
            return result;
        },
        doDivisionOfValues(data) {
            return doDivision(data);
        },
        doSubstraction (data)  {
            count += 2;
            data.fval = parseInt(data.fval);
            data.sval = parseInt(data.sval);
            var result;
            result = data.fval - data.sval;
            return result;
        }
    };

})();

