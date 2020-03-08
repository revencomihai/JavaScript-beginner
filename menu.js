var priceCola = 50;
var priceSalad = 100;
var priceSteak = 150;

var menu = "***\nCola - " + priceCola + "MDL\n***\nSteak - " + priceSalad + "MDL\n***\nSalad - " + priceSteak + "MDL\n***"
alert(menu)

var quantity = prompt('How many Colas?')
var totalCost1 = quantity * priceCola;

var quantity = prompt('How many steaks')
var totalCost2 = quantity * priceSteak;

var quantity = prompt('How many salads')
var totalCost3 = quantity * priceSalad;

var sum = totalCost1 + totalCost2 + totalCost3;
var bill = 'Your total is: ' + sum

alert(bill)