function placeOrder() {
  var name = document.getElementById("name").value;
  var drink = document.getElementById("drink").value;
  
  var orderStatusMessage = document.getElementById("order-status-message");
  orderStatusMessage.innerHTML = "Thank you, " + name + "! Your order for " + drink + " has been placed.";
}
