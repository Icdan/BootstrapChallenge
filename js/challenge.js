var snoepemmer = 1.50;
var tandenborstel = 24.95;
var afleverkosten = 4.95;
var totaal = 0;
var totaalbedrag = document.getElementById("totaalbedrag3");

var subtotal1 = document.getElementById("subtotaal1");
subtotal1.innerHTML = '€' + 0;
var subtotal2 = document.getElementById("subtotaal2");
subtotal2.innerHTML = '€' + 0;
var subtotal3 = document.getElementById("subtotaal3");
subtotal3.innerHTML = '€' + 0;

var checkmark1 = document.getElementById("checkmark1");
var checkmark2 = document.getElementById("checkmark2");
var radio2 = document.getElementById("optionsRadios2");

function bereken() {
    var input1 = document.getElementById("input1").value;
    var inputParse1 = parseInt(input1);
    var product1 = 1.50 * inputParse1;
    var product12 = product1.toFixed(2);
    var input2 = document.getElementById("input2").value;
    var inputParse2 = parseInt(input2);
    var product2 = 1.55 * inputParse2;
    var product22 = product2.toFixed(2);
    var input3 = document.getElementById("input3").value;
    var inputParse3 = parseInt(input3);
    var product3 = 1.45 * inputParse3;
    var product32 = product3.toFixed(2);

    subtotal1.innerHTML = '€' + product12;
    subtotal2.innerHTML = '€' + product22;
    subtotal3.innerHTML = '€' + product32;

    totaal = 0;
    totaal += product1;
    totaal += product2;
    totaal += product3;
    if (checkmark1.checked) totaal += snoepemmer;
    if (checkmark2.checked) totaal += tandenborstel;
    if (radio2.checked) totaal += afleverkosten;

    var totaal2 = totaal.toFixed(2);
    totaalbedrag.innerHTML = 'Totaal: €' + totaal2;
}