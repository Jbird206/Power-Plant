function PizzaParlor() {
  this.account = [];
  this.order = [];
  this.price = 0;
  this.currentId = 0;
  //this.toppings = toppings;
}

PizzaParlor.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.account.push(account);
}

PizzaParlor.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// PizzaParlor.prototype.addPrice = function(price) {
// this.
// }


var Account = function(firstName, lastName, myAddress, myPrice) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.address = myAddress,
    this.price = myPrice;
  return this.firstName + this.lastName + this.address + this.price;
};


///////////////////////////////////front end///////////////////////
var PizzaParlor = new PizzaParlor();
$(document).ready(function() {


  function calcPrice() {
    var price = 0;
    $("input[type=radio][data-price]:checked").each(function(i, el) {
      price += +$(el).data("price");
    });
    return price;
  };

  function order() {
    var order = [];
    $("input[type=radio][id]:checked").each(function(i, el) {
      order.push(el.id);
    });
    return order;
  };

  $("input[type=radio]").on("change", calcPrice);
  calcPrice();



  $("form#create-account").submit(function(event) {
    event.preventDefault();
    var inputfirstname = $("input#firstname").val();
    var inputlastname = $("input#lastname").val();
    var inputaddress = $("input#address").val();
    var finalPrice = calcPrice();
    var finalorder = order();

    console.log(finalPrice);
    console.log(finalorder);

    var inputprice = $("input#price").html(price);

    //var inputprice = $("input#calc").val();
    var createAccount = new Account(inputfirstname, inputlastname, inputaddress, inputprice);

    PizzaParlor.addAccount(createAccount);
    console.log(this.inputprice);

    $("#outputName").html(inputfirstname + " " + inputlastname + " " + inputaddress + ". Your total is $ " + finalPrice);

    console.log(createAccount.account);

    $("#output").html(createAccount.account);

  });

})
