var myMathUtil=function(){var a=0;function v(){console.log("from library")}var l=v=>{var l;return a+=2,v.fval=parseInt(v.fval),v.sval=parseInt(v.sval),l=v.fval+v.sval},r=v=>{var l;return a+=2,v.fval=parseInt(v.fval),v.sval=parseInt(v.sval),l=v.fval/v.sval};return{doTheAdditionOfValues:a=>l(a),doMultiplicaiton(v){var l;return a+=2,v.fval=parseInt(v.fval),v.sval=parseInt(v.sval),l=v.fval*v.sval},doDivisionOfValues:a=>r(a),doSubstraction(v){var l;return a+=2,v.fval=parseInt(v.fval),v.sval=parseInt(v.sval),l=v.fval-v.sval}}}();