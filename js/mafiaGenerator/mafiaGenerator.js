var button = document.getElementById("calcRolesButton");
button.addEventListener("click",calc_rolles);

var char_all = [];
var max;

function calc_rolles() {
    // Einlesen der gewünschten Spieler
    var char = [nullOrValue(parseInt(document.getElementById("Buerger").value)),
                nullOrValue(parseInt(document.getElementById("Mafia").value)),
                nullOrValue(parseInt(document.getElementById("Spion").value)),
                nullOrValue(parseInt(document.getElementById("Maulwurf").value)),
                nullOrValue(parseInt(document.getElementById("Freimaurer").value)),
                nullOrValue(parseInt(document.getElementById("Prophet").value))];

    // Summe aller Spieler
    max = char.reduce(function(total, currentValue){
        return total + currentValue;
    },0);

    // Speichern der Spieler Art
    for(var i = 0; i < 6; i++)
    {
        for(var n = 0; n < char[i]; n++)
        {
            switch(i)
            {
                case 0:
                    char_all[char_all.length] = "B";
                    break;
                case 1:
                    char_all[char_all.length] = "M";
                    break;
                case 2:
                    char_all[char_all.length] = "S";
                    break;
                case 3:
                    char_all[char_all.length] = "MW";
                    break;
                case 4:
                    char_all[char_all.length] = "F";
                    break;
                case 5:
                    char_all[char_all.length] = "P";
                    break;
            }
        }
    }
    // Spieler zufällig verteilen
    shuffle(char_all);

    // Seite wechseln
    sessionStorage.setItem("allChar",char_all);
    sessionStorage.setItem("max",max);
    showOutput();
}