var generateCapcha = () => {
    var capchaValue = getRandomNumber() + getRandomLowerCaseChar() + getRandomUpperCaseChar() + getRandomUpperCaseChar() +  getRandomNumber();

    document.querySelector("#capchaContainer").innerHTML = capchaValue;
    document.getElementById('capchaContainer').style.display = 'block';
    html2canvas(document.getElementById('capchaContainer'), {
        onrendered: function (canvas) {
            
          var screenshot = canvas.toDataURL('image/png');
          console.log(screenshot)
          document.querySelector('#cptImage').setAttribute('src', screenshot);
          document.getElementById('capchaContainer').style.display = 'none';
        },
    });

}

var getRandomNumber = () => {
    var max = 10;
    var randomNumber = Math.floor(Math.random() * max);
    return randomNumber.toString();
}

var getRandomLowerCaseChar = () => {
    var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    var randomIndex = Math.floor(Math.random() * (lowerCaseChars.length));
    return lowerCaseChars[randomIndex];

}

var getRandomUpperCaseChar = () => {
    var lowerCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    var randomIndex = Math.floor(Math.random() * (lowerCaseChars.length));
    return lowerCaseChars[randomIndex];
}

