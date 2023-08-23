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
    $('#height-unit').html("in");
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

$("#height").on("keyup", function() {
    $('#result-welcome').hide();
    $('#result-result').show();
    bmi();
});

function bmi(){
    let bmi;

    if(isMetric){
        bmi = bmiMetric($('#height').val(),$('#weight').val());

        if (isNaN(bmi) || bmi == 0 || !isFinite(bmi)){
            $('#bmi').html(0);
        }
        else{
            $('#bmi').html(parseFloat(bmi).toFixed(1));
            suggest(bmi);
            idealWeight($('#height').val());
        }
        
    }
    
    else{
        bmi = bmiImperial($('#height').val(),$('#weight').val());

        if (isNaN(bmi) || bmi == 0 || !isFinite(bmi)){
            $('#bmi').html(0);
        }
        else{
        $('#bmi').html(parseFloat(bmi).toFixed(1));
        suggest(bmi);
        idealWeight($('#height').val()*2.54);
        }
    }
}

function idealWeight(height){
    let idealWeight = $('#ideal-weight');

    if(height>= 152 && height<= 155){
        idealWeight.html('44kg - 58kg');
    }

    if(height>= 157 && height<= 160){
        idealWeight.html('47kg - 61kg');
    }

    if(height>= 162 && height<= 165){
        idealWeight.html('50kg - 65kg');
    }

    if(height>= 168 && height<= 170){
        idealWeight.html('54kg - 69kg');
    }

    if(height>= 173 && height<= 175){
        idealWeight.html('57kg - 74kg');
    }

    if(height>= 178 && height<= 180){
        idealWeight.html('60kg - 78kg');
    }

    if(height>= 183 && height<= 185){
        idealWeight.html('64kg - 83kg');
    }

    if(height>= 188 && height<= 190){
        idealWeight.html('67kg - 87kg');
    }

    if(height>= 193){
        idealWeight.html('71kg - 89kg');
    }
}

function suggest(bmi){
    let bmiIndex = $('#bmi-index');
    if(bmi<18.5){
        bmiIndex.html('thinness');
    }

    if (bmi>=18.5 && bmi<24.9){
        bmiIndex.html('healthy');
    }

    if(bmi>=25 && bmi<29.9){
        bmiIndex.html('overweight');
    }

    if(bmi>=30){
        bmiIndex.html('obese');
    }
}

function bmiMetric(height,weight){
    return (weight/((height*0.01)*(height*0.01)));
}

function bmiImperial(height,weight){
    return (weight/(height*height))*703;
}