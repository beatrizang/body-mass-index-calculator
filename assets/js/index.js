let metric = document.getElementById('metric');
let heightUnit = document.getElementById('height-unit');
let weightUnit = document.getElementById('weight-unit');

let imperial = document.getElementById('imperial');
let imperialUnit = document.getElementById('weight-unit');

let height = document.getElementById('height');
let weight = document.getElementById('weight');

$(document).ready(function(){
    metric.checked = true;
    $('#height-unit').html("cm");
    $('#weight-unit').html("kg");
});

$('#imperial').click(function(){
    $('#height-unit').html("plg");
    $('#weight-unit').html("lb");
})

$('#metric').click(function(){
    $('#height-unit').html("cm");
    $('#weight-unit').html("kg");
});


function bmiMetric(height,weight){
    return (weight/(height*height));
}

function bmiImperial(height,weight){
    return (weight/(height*height))*703;
}