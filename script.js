function setSliderValue()
{
   var sliderValue = document.getElementById("rate").value;
   document.getElementById("rateValue").innerHTML = sliderValue;
}

function addResultContent(text, value)
{
  var paragraph = document.createElement("span");
  var paragraphText = document.createTextNode(text);
  paragraphText += ' ' + value;
  paragraph.appendChild(concatenatedText);
  document.body.appendChild(paragraph)

}

function compute()
{
  var principalVal = document.getElementById("principal").value;
  var rateVal = document.getElementById("rate").value;
  var years = document.getElementById("selectedyears").value;
  var interestVal = principalVal * years * rateVal/100;
  var futureYear = parseInt(years) + parseInt(new Date().getFullYear());

  document.getElementById("result").innerHTML =
  "If you deposit: "+ principalVal +" at an interest rate of " + rateVal + " You will receive an amount of: " + interestVal + " in the year: " + futureYear;
}
