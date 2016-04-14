var amount = prompt('What is the bill amount?');
var party = prompt('How many in your party?');
var local = prompt('Washington or Oregon location?');
console.log(party)

if (local === 'Washington') {
    var tax = Number(amount * 0.07);
    console.log(tax)
    var tip = Number(amount * 0.20);
    console.log(tip)
    var total = (Number(amount) + Number(tip) + Number(tax)) / Number(party);
} else {
    var tip = amount * 0.20;
    console.log(tip)
    var total = (Number(amount) + Number(tip)) / Number(party);
}
console.log('Your split total cost is $' + total);
