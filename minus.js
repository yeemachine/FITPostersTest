function minus(){

$.getJSON("database.json", function(data) {
  var imgTitle = data.posters[posterID].title
  var price = data.posters[posterID].price
  var qty = 1
  var selectedItemscontainer = $('<ul></ul>')

  if ($('.'+posterID).attr('status') === 'selected' && 1 === selectedItems[posterID].qty) {
    $('.'+posterID).removeClass('selected');
      $('.'+posterID).attr('status', '');
      $('#buy').attr('status','');
      $('#buy h3').html('Add to Cart');
      $('#buy h3').removeClass('selected');
      delete selectedItems[posterID];
      $('.'+posterID).removeClass(imgTitle);
      $('.'+posterID+' .qtyNum').html('0');
  }
  if ($('.'+posterID).attr('status') === 'selected' && 1 <= selectedItems[posterID].qty) {
    qty = selectedItems[posterID].qty - 1;
    selectedItems[posterID] = {imgTitle,price,qty};
    console.log(selectedItems[posterID].qty);
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
