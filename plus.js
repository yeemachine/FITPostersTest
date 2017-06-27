function plus(){

$.getJSON("database.json", function(data) {
  var imgTitle = data.posters[posterID].title
  var price = data.posters[posterID].price
  var qty = 1
  var selectedItemscontainer = $('<ul></ul>')

  if ($('.'+posterID).attr('status') === 'selected' && 0 <= selectedItems[posterID].qty && selectedItems[posterID].qty < 99) {
    qty = selectedItems[posterID].qty + 1;
    selectedItems[posterID] = {imgTitle,price,qty};
    console.log(selectedItems[posterID].qty);
    $('.'+posterID+' .qtyNum').html(selectedItems[posterID].qty);
  }
  if ($('.'+posterID).attr('status') != 'selected') {
    $('.'+posterID).addClass('selected');
    $('.'+posterID).attr('status', 'selected');
    $('#buy').attr('status','selected');
    $('#buy h3').html('Remove from Cart');
    $('#buy h3').addClass('selected');
    selectedItems[posterID] = {imgTitle,price,qty};
    $('.'+posterID).addClass(imgTitle);
    console.log(Object.keys(selectedItems)[0]);
    $('.'+posterID+' .qtyNum').html(selectedItems[posterID].qty);
  }



  objectSelector = Object.keys(selectedItems)
  totalPrice = 0
  totalItems = 0
  for (i = 0; i < objectSelector.length; i++) {
    objectSelector2 = objectSelector[i];
    var selectedItemsnode = $('<li class="'+objectSelector2+'">'+selectedItems[objectSelector2].imgTitle+"<br>"+selectedItems[objectSelector2].price+' Quantity: '+selectedItems[objectSelector2].qty+'<br><br></li>')
      selectedItemscontainer.append(selectedItemsnode)
      totalPrice = totalPrice + selectedItems[objectSelector2].price*selectedItems[objectSelector2].qty
      totalItems = totalItems + selectedItems[objectSelector2].qty
  }
  console.log(totalPrice);
  var subTotal = $('<li class="subTotal">Subtotal: '+totalPrice+'</li>')
  selectedItemscontainer.append(subTotal)
  $('.cart').html("<a>Cart ("+totalItems+")</a>")
  $('.item-list').html(selectedItemscontainer)

  // $('li.'+posterID).css({'animation':'red .5s linear'});
});
}
