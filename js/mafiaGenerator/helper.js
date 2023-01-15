var showCar = true;
var counter = 0;

var char_all = splitSessionStorageToArray(sessionStorage.getItem("allChar"));
var max = parseInt(sessionStorage.getItem("max"));

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

function shuffle(array)
{
    array.sort(()=> Math.random()-0.5);
}

function nullOrValue(int)
{
    return int > 0 ? int : 0;
}

function splitSessionStorageToArray(cookie)
{
    var cookieSplit = [];
    for(var i = 0; i < cookie.length; i++)
    {
        if(cookie[i] != ',' && cookie[i+1]==','){ cookieSplit[cookieSplit.length] = cookie[i];}
        else if(cookie[i] != ','){cookieSplit[cookieSplit.length] = cookie[i]+cookie[i+1];i++;}
    }
    return cookieSplit;
}