var input1 = document.getElementById("input1").value;
// var inputParse1 = parseInt(input11);
var product1 = 1.50 * input1;
var input2 = document.getElementById("input2").value;
var product2 = 1.55 * input2;
var input3 = document.getElementById("input3").value;
var product3 = 1.45 * input3;
var snoepemmer = 1.50;
var tandenborstel = 24.95;
var afleverkosten = 4.95;
var totaal = 0;
var totaalbedrag = document.getElementById("totaalbedrag3");

var checkmark1 = document.getElementById("checkmark1");
var checkmark2 = document.getElementById("checkmark2");
var radio1 = document.getElementById("optionsRadios1");
var radio2 = document.getElementById("optionsRadios2");

function bereken() {


    if (checkmark1.checked && checkmark2.checked && radio1.checked) {
        totaal = snoepemmer + tandenborstel + totaal;
    }
    else if (checkmark1.checked && checkmark2.checked && radio2.checked) {
        totaal = product1 + snoepemmer + tandenborstel + afleverkosten + totaal;
    }


    totaal2 = totaal.toFixed(2);
    totaalbedrag.innerHTML = 'Totaal: €' + totaal2;
}




