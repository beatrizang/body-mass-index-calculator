let metric = document.getElementById('metric');
let heightUnit = document.getElementById('height-unit');
let weightUnit = document.getElementById('weight-unit');

let imperial = document.getElementById('imperial');
let imperialUnit = document.getElementById('weight-unit');

let height = document.getElementById('height');
let weight = document.getElementById('weight');

let isMetric = true;

$(document).ready(function(){
    metric.checked = true;
    $('#height-unit').html("cm");
    $('#weight-unit').html("kg");
    $('#bmi').html(0);
    $('#result-welcome').show();
    $('#result-result').hide();
});

$('#imperial').click(function(){
    $('#height-unit').html("plg");
    $('#weight-unit').html("lb");
    isMetric = false;
})

$('#metric').click(function(){
    $('#height-unit').html("cm");
    $('#weight-unit').html("kg");
    isMetric = true;
});

$("#weight").on("keyup", function() {
    $('#result-welcome').hide();
    $('#result-result').show();
    bmi();
});

function bmi(){
    let bmi;

    if(isMetric){
        bmi = bmiMetric($('#height').val(),$('#weight').val());
        $('#bmi').html(parseFloat(bmi).toFixed(1));
    }
    
    else{
        bmi = bmiImperial($('#height').val(),$('#weight').val());
        $('#bmi').html(parseFloat(bmi).toFixed(1));
    }
}


function bmiMetric(height,weight){
    return (weight/((height*0.01)*(height*0.01)));
}

function bmiImperial(height,weight){
    return (weight/(height*height))*703;
}