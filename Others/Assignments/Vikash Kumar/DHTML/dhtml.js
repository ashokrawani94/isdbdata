var calculate = () =>{
	var a1 = document.querySelector("#fval").value;
	a1 = parseInt(a1);

	var a2 = document.querySelector("#sval").value;
    a2 = parseInt(a2);

    var option = document.querySelector("#userOption").value
     var result = 0;

     if(option == 'Addition'){
     	result = a1 + a2
     }
       else if(option == 'Subtraction'){
     	result = a1 - a2
     }
       else  if(option == 'Multiplication'){
     	result = a1 * a2
     }
      else{
     	result = a1 / a2
     }

     document.querySelector("#opr").innerHTML = result;

}
