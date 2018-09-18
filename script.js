var burger = {
  name: "Original Burger",
  meat: "Beefy Beef",
  grown: ["Lettuce", "Tomato", "Pickles"],
  sauce: "Ketchup",
  qty: 30,
  price: 5.99
};
var fshBurger = {
  name: "Fish Burger",
  meat: "Fishy Fish",
  grown: ["Lettuce", "Coleslaw"],
  sauce: "Drops of Lemon Juice",
  qty: 22,
  price: 6.25
};
var x;
var y = 0;
function onStart() {
  document.getElementById("bn").innerHTML = burger.name;
  document.getElementById("bm").innerHTML = burger.meat;
  document.getElementById("bg").innerHTML = burger.grown;
  document.getElementById("bs").innerHTML = burger.sauce;
  document.getElementById("bq").innerHTML = burger.qty + " Available";
  document.getElementById("bp").innerHTML = "$" + burger.price;
  document.getElementById("fn").innerHTML = fshBurger.name;
  document.getElementById("fm").innerHTML = fshBurger.meat;
  document.getElementById("fg").innerHTML = fshBurger.grown;
  document.getElementById("fs").innerHTML = fshBurger.sauce;
  document.getElementById("fq").innerHTML = fshBurger.qty + " Available";
  document.getElementById("fp").innerHTML = "$" + fshBurger.price;
  document.getElementById("total").innerHTML = "Total:";
}

var tax = 0.04712;
function buyOne() {
  var bb = document.getElementById("numBuyOne").value;
  if (burger.qty > 1 && bb <= burger.qty) {
    burger.qty = burger.qty - bb;
    document.getElementById("bq").innerHTML = burger.qty + " Available";
    x = (burger.price + (burger.price * tax));
    y = y + x * bb;
    document.getElementById("numBuyOne").value = 0;
    document.getElementById("total").innerHTML = "Total: " + "$" + y.toFixed(2);
  }
  else {
    document.getElementById("numBuyOne").value = 0;
  }
  if (burger.qty < 1) {
    document.getElementById("bq").innerHTML = "None Available";
  }
}

function buyTwo() {
  var fb = document.getElementById("numBuyTwo").value;
  if (fshBurger.qty > 1 && fb <= fshBurger.qty) {
    fshBurger.qty = fshBurger.qty - fb;
    document.getElementById("fq").innerHTML = fshBurger.qty + " Available";
    x = (fshBurger.price + (fshBurger.price * tax));
    y = y + x * fb;
    document.getElementById("numBuyTwo").value = 0;
    document.getElementById("total").innerHTML = "Total: " + "$" + y.toFixed(2);
  }
  else {
    document.getElementById("numBuyTwo").value = 0;
  }
  if (fshBurger.qty <= 1) {
    document.getElementById("fq").innerHTML = "None Available";
  }
}
