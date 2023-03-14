var result=()=>{
   
    var a1=document.querySelector("#first").value;
    a1=parseInt(a1);
    var a2=document.querySelector("#second").value;
    a2=parseInt(a2);
    var option= document.querySelector("#selection").value;
    var result=0;
    if(option=="Add"){
        result=a1+a2
    }else if(option=='Sub'){
        result=a1-a2
    }else if(option=='Mul'){
        result=a1*a2
    }else{
        result=a1/a2
    }
    document.querySelector("#Answer").innerHTML=result;

}