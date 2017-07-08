function minus(){

$.getJSON("database.json", function(data) {
  var imgTitle = data.posters[posterID].title
  imgTitle = imgTitle.replace(/&lt;br&gt;/g, ' ');

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

    name = selectedItems[objectSelector2].imgTitle
    pricePer = selectedItems[objectSelector2].price
    unit = selectedItems[objectSelector2].qty
    subPrice = pricePer * unit

    var selectedItemsnode = $('<li class="'+objectSelector2+'"><div>'+name+" </div><div> $"+pricePer+' </div><div>'+unit+'</div><div>$'+subPrice+'</div></li>')
      selectedItemscontainer.append(selectedItemsnode)
      totalPrice = totalPrice + subPrice
      totalItems = totalItems + unit
  }
  console.log(totalPrice);
  var subTotal = $('<li class="subTotal">Subtotal: '+totalPrice+'</li>')
  selectedItemscontainer.append(subTotal)
  $('.cart').html("<a>Cart ("+totalItems+")</a>")
  $('.item-list').html(selectedItemscontainer)
  $('li.'+posterID).css({'border-bottom':'2px solid black'});

  // $('li.'+posterID).css({'animation':'red .5s linear'});
});
}
