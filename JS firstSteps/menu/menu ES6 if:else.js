var priceCola = 10;
var priceSteak = 20;
var priceSalad = 30;

var menu = `Cola = ${priceCola}
            Steak = ${priceSteak}
            Salad = ${priceSalad}`

var quantity = prompt('How many Colas?')
var totalCost1 = quantity * priceCola;

var quantity = prompt('How many steaks')
var totalCost2 = quantity * priceSteak;

var quantity = prompt('How many salads')
var totalCost3 = quantity * priceSalad;

var sum = totalCost1 + totalCost2 + totalCost3;

if(sum>300){
    alert(` 
            Your total is ${sum}
            Your delivery will be free`)
}  else {
    var sum = sum + 50;
    alert(`Your total is ${sum}`)
    }
 /* var bill = `Total is ${sum}`

alert(bill) */