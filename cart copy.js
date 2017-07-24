function addCart(){

$.getJSON("database.json", function(data) {
  var name = data.posters[posterID].title
  if (imgTitle.length > 34){
    console.log('too long');
    name = imgTitle.substring(0, 34) + '...';
  }
  var price = data.posters[posterID].price
  var quantity = 1
  var selectedItemscontainer = $('<ul></ul>')
  var currency = 'USD'
  if ($('.'+posterID).attr('status') != 'selected') {
    $('.'+posterID).addClass('selected');
    $('.'+posterID).attr('status', 'selected');
    $('#buy').attr('status','selected');
    $('#buy h3').html('Remove from Bag');
    $('#buy h3').addClass('selected');
    selectedItems[posterID] = {name,quantity,price,currency};
    $('.'+posterID).addClass(imgTitle);
    console.log(Object.keys(selectedItems)[0]);
    $('.'+posterID+' .plus').html('');
    $('.'+posterID+'.cartMode .quantity').removeClass('hovered');


  }else{
    $('.'+posterID).removeClass('selected');
    $('.'+posterID).attr('status', '');
    $('#buy').attr('status','');
    $('#buy h3').html('Add to Bag');
    $('#buy h3').removeClass('selected');
    delete selectedItems[posterID];
    $('.'+posterID).removeClass(imgTitle);
    $('.'+posterID+' .plus').html('+');
  }

  objectSelector = Object.keys(selectedItems)
  totalPrice = 0
  totalItems = 0
  taxed = 0


  for (i = 0; i < objectSelector.length; i++) {
    objectSelector2 = objectSelector[i];

    name = selectedItems[objectSelector2].name
    pricePer = selectedItems[objectSelector2].price
    unit = selectedItems[objectSelector2].quantity
    subPrice = pricePer * unit


    var selectedItemsnode = $('<li class="listItem '+objectSelector2+'"><div>'+name+" </div><div> $"+pricePer+' </div></li>')
      selectedItemscontainer.append(selectedItemsnode)
      totalPrice = totalPrice + subPrice
      taxed = ((totalPrice * 1.1154) + 20.0).toFixed(2);
      tax = ((totalPrice + 20) * 0.1154).toFixed(2);
      totalItems = totalItems + unit

  }
  console.log(totalPrice);
  if (objectSelector.length === 0){
    idleCart = $('<li class="idleCart"><div>You currently have no items selected.</div></li>')
    selectedItemscontainer.append(idleCart)
    $('.tax').html("<div>Tax(11.54%):</div><a>$"+0+"</a>")
  }
  if (objectSelector.length > 0){
    $('.checkout, .tax, .shipping, .subtotal').addClass('selected')
    $('.tax').html("<div>Tax(11.54%):</div><a>$"+tax+"</a>")
     subTotal = $('<li class="subTotal selected"><div>Total:</div><div>$'+taxed+'</div></li>')
  }else{
    $('.checkout, .tax, .shipping, .subtotal').removeClass('selected')
     subTotal = $('<li class="subTotal"><div>Total:</div><div>$'+taxed+'</div></li>')
  }

  selectedItemscontainer.append(subTotal)
  $('.cart a p').html("Bag ("+totalItems+")")

  $('.item-list section').html(selectedItemscontainer)
  $('li.'+posterID).css({'animation':'red 1s linear'});
  // $('li.'+posterID).addClass('hovered');

paypalformat = Object.values(selectedItems)

console.log(paypalformat);
});
}
