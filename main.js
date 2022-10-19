// height input
function changeRangeValue(val){
    document.getElementById("height-slider").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}

function changeInputValue(val){
    document.getElementById("height-text").innerHTML = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}

// weight input
function changeWangeValue(val){
    document.getElementById("weight-slider").value = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}

function changeWnputValue(val){
    document.getElementById("weight-text").innerHTML = isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10);
}

function HideBmi() {
    document.getElementById('bmi-img').classList.add('hidden');
    document.getElementById('bmi-res').classList.add('hidden');
    document.getElementById('bmi-num').classList.add('hidden');
}

HideBmi()

function ShowBmi() {
    document.getElementById('bmi-img').classList.add('left-right');
    document.getElementById('bmi-num').classList.add('left-right-2');
    document.getElementById('bmi-res').classList.add('left-right-2');
    document.getElementById('bmi-img').classList.remove('hidden');
    document.getElementById('bmi-num').classList.remove('hidden');
    document.getElementById('bmi-res').classList.remove('hidden');
}

function CalBmi() {
    var heightval1 = document.getElementById('height-slider').value;
    var weightval = document.getElementById('weight-slider').value;
    let heightval = heightval1 / 100;
    console.log(heightval);
    let height2 = heightval * heightval;
    var bmival = weightval / height2;
    var bmirounded = Math.round(bmival)
    document.getElementById('bmi-num').innerHTML = (bmirounded)
    console.log(bmival, bmirounded);
    ShowBmi();
}

function Colorize() {
    var heightval1 = document.getElementById('height-slider').value;
    var weightval = document.getElementById('weight-slider').value;
    let heightval = heightval1 / 100;
    let height2 = heightval * heightval;
    let bmival = weightval / height2;
    var bmirounded = Math.round(bmival)
    if (bmival <= 18.5) {
        document.getElementById('bmi-num').classList.remove('underweight', 'normal', 'overweight', 'obese', 'extremlyobese');
        document.getElementById('bmi-num').classList.add('underweight');
    }
    if (24.9 >= bmival, bmival >= 18.5) {
        document.getElementById('bmi-num').classList.remove('underweight', 'normal', 'overweight', 'obese', 'extremlyobese');
        document.getElementById('bmi-num').classList.add('normal');
    }
    if (29.9 >= bmival, bmival >= 25) {
        document.getElementById('bmi-num').classList.remove('underweight', 'normal', 'overweight', 'obese', 'extremlyobese');
        document.getElementById('bmi-num').classList.add('overweight');
    }
    if (34.9 >= bmival, bmival >= 30) {
        document.getElementById('bmi-num').classList.remove('underweight', 'normal', 'overweight', 'obese', 'extremlyobese');
        document.getElementById('bmi-num').classList.add('obese');
    }
    if ( bmival >= 35) {
        document.getElementById('bmi-num').classList.remove('underweight', 'normal', 'overweight', 'obese', 'extremlyobese');
        document.getElementById('bmi-num').classList.add('extremlyobese');
        
    }
}

function Colorizee() {
    if (3 > 2) {
        document.getElementById('bmi-num').classList.add('normal')
        console.log('24');
    };
}