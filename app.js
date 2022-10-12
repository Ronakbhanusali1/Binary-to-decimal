

function binToDec(){

    var input = document.getElementById("binary").value;
    // code to convert value into decimal
    var output = parseInt(input,2);
    // returning converted value in my output box
    return document.getElementById("result").innerHTML = output;
    }
    