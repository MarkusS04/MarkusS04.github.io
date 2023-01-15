var char_all = [];
var showCar = true;
var counter = 0;
var max;

function calc_rolles() {
    var buerger = parseInt(document.getElementById("Buerger").value);
    var mafia = parseInt(document.getElementById("Mafia").value);
    var spion = parseInt(document.getElementById("Spion").value);
    var maulwurf = parseInt(document.getElementById("Maulwurf").value);
    var freimaurer = parseInt(document.getElementById("Freimaurer").value);
    var prophet = parseInt(document.getElementById("Prophet").value);

    max = buerger + mafia + spion + maulwurf + freimaurer + prophet;

    for(var i=0; i<buerger;i++){
        char_all[char_all.length] = "B";
    }
    for(var i=0; i<mafia;i++){
        char_all[char_all.length] = "M";
    }
    for(var i=0; i<spion;i++){
        char_all[char_all.length] = "S";
    }
    for(var i=0; i<maulwurf;i++){
        char_all[char_all.length] = "MW";
    }
    for(var i=0; i<freimaurer;i++){
        char_all[char_all.length] = "F";
    }
    for(var i=0; i<prophet;i++){
        char_all[char_all.length] = "P";
    }

    shuffle(char_all);
    console.log(char_all);

    hideDiv("input_char");
    showDiv("output_char");
}

function get_next_char() {
    var output = document.getElementById("char");
    var buttonNext = document.getElementById("next");
    if(showCar)
    {
        showNextCar();
        showCar = false;
    }
    else
    {
        output.innerHTML = "An nächste Person weitergeben";
        next.innerHTML = "Charakter anzeigen"
        showCar = true;
    }
}

function showNextCar()
{
    var output = document.getElementById("char");
    var buttonNext = document.getElementById("next");
    if(counter < max)
    {
        switch(char_all[counter])
        {
            case "B":
                output.innerHTML = "Bürger"
                break;
            case "M":
                output.innerHTML = "Mafia"
                break;
            case "S":
                output.innerHTML = "Spion"
                break;
            case "MW":
                output.innerHTML = "Maulwurf"
                break;
            case "F":
                output.innerHTML = "Freimaurer"
                break;
            case "P":
                output.innerHTML = "Prophet"
                break;
        }
    }else
    {
        output.innerHTML = "Alle Charaktere zugewiesen"
    }

    buttonNext.innerHTML = "Anzeige sperren"
    counter++;
}

function shuffle(array) {
    array.sort(()=> Math.random()-0.5);
}

function showDiv(divId) {
    var divToShow = document.getElementById(divId);
    divToShow.style.display = "block";
}

function hideDiv(divId) {
    var divToHide = document.getElementById(divId);
    divToHide.style.display = "none";
}