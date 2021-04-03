function compute()
{
    p = document.getElementById("principal").value;
    var principal;
    var rate = document.getElementById("rate")
    var years = document.getElementById("selectedyears")
    var interest = principal * years * rate/100;

    var futureYear = years.value + Date().getFullYear();
    var result = document.getElementById("result");
    result.innerHTML;
}

function setSliderValue()
{
    var slider = document.getElementById("rate");
    var valuedisplay = document.getElementById("rateValue").innerHTML;
    valuedisplay.innerHTML = slider.value;
}


        