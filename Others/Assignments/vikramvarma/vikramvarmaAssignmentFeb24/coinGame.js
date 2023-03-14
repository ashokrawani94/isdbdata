for (var i = 1; i <= 90; i++) {
  var numdiv = document.createElement("div");
  numdiv.setAttribute("class", `number${i}`);
  var numbers = (numdiv.innerText = i);
  document.querySelector(".container").append(numdiv);
}
for (var j = 1; j <= 90; j++) {
  document.querySelector(`.number${j}`).style.float = "left";
  document.querySelector(`.number${j}`).style.width = "30px";
  document.querySelector(`.number${j}`).style.height = "30px";

  document.querySelector(`.number${j}`).style.padding = "10px";

  document.querySelector(`.number${j}`).style.border = "2px solid";
  document.querySelector(`.number${j}`).style.borderRadius = "50%";
  document.querySelector(`.number${j}`).style.textAlign = "center";

  document.querySelector(`.number${j}`).style.float = "left";

  document.querySelector(`.number${j}`).style.margin = "5px";
}
for (var n = 1; n <= 8; n++) {
  document.querySelector(`.number${n}1`).style.clear = "left";
}
//

var showdiv = document.createElement("div");
showdiv.setAttribute("class", "numberdiv");
showdiv.innerText = 0;
var numbertext = document.createElement("span");

document.querySelector(".random").append(showdiv);
document.querySelector(".random").append(numbertext);

//

document.querySelector("#btn").addEventListener("click", function () {
  var randomNum = Math.floor(Math.random() * 90 + 1);
  showdiv.innerText = randomNum;
  numbertext.innerText = `You picked a ${randomNum}`;
  //console.log(randomNum);

  for (var k = 1; k <= 90; k++) {
    var check = document.querySelector(`.number${k}`).innerText;
    if (randomNum == check) {
      // console.log(check);
      document.querySelector(`.number${k}`).style.backgroundColor = "pink";
      break;
    }
  }
});
