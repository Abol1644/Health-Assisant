// window.onload = function() {
//     document.welcome.className += ' loaded';
// }

// function showValue1(newValue) { 
//     document.getElementById("monday").innerHTML= newValue;
// }

// height input
function changeRangeValue(val){
    document.getElementById("height-slider").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}

function changeInputValue(val){
    document.getElementById("height-text").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}

// weight input
function changeWangeValue(val){
    document.getElementById("weight-slider").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}

function changeWnputValue(val){
    document.getElementById("weight-text").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}