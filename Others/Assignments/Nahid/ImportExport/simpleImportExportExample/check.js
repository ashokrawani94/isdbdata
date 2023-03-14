import { msg, getValues } from "./simpleUtil.js";

var message = msg;
document.querySelector("#sp1").innerHTML=message;

var getMethod = (a,b)=>{
 var res = getValues(a,b);
 document.querySelector("#div1").innerHTML=`<br> value is ${res}`;
}

document.querySelector("#btn_getValue").addEventListener("click", ()=>{getMethod(100,200)});