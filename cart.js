function addCart(){

$.getJSON("database.json", function(data) {
  var imgTitle = data.posters[posterID].title
  var price = data.posters[posterID].price
  var qty = 1
  var selectedItemscontainer = $('<ul></ul>')
  if ($('.'+posterID).attr('status') != 'selected') {
    $('.'+posterID).addClass('selected');
    $('.'+posterID).attr('status', 'selected');
    $('#buy').attr('status','selected');
    $('#buy h3').html('Remove from Cart');
    $('#buy h3').addClass('selected');
    selectedItems[posterID] = {imgTitle,price,qty};
    $('.'+posterID).addClass(imgTitle);
    console.log(Object.keys(selectedItems)[0]);
  }else{
    $('.'+posterID).removeClass('selected');
    $('.'+posterID).attr('status', '');
    $('#buy').attr('status','');
    $('#buy h3').html('Add to Cart');
    $('#buy h3').removeClass('selected');
    delete selectedItems[posterID];
    $('.'+posterID).removeClass(imgTitle);
  }

  objectSelector = Object.keys(selectedItems)
  totalPrice = 0
  for (i = 0; i < objectSelector.length; i++) {
    objectSelector2 = objectSelector[i];
    var selectedItemsnode = $('<li class="'+objectSelector2+'">'+selectedItems[objectSelector2].imgTitle+" "+selectedItems[objectSelector2].price+' Quantity: '+selectedItems[objectSelector2].qty+'</li>')
      selectedItemscontainer.append(selectedItemsnode)
      totalPrice = totalPrice + selectedItems[objectSelector2].price*selectedItems[objectSelector2].qty
  }
  console.log(totalPrice);
  var subTotal = $('<li class="subTotal">Subtotal: '+totalPrice+'</li>')
  selectedItemscontainer.append(subTotal)
  $('.cart').html("<a>Cart ("+objectSelector.length+")</a>")
  $('.item-list').html(selectedItemscontainer)
});
}
