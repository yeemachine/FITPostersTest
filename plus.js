function plus(){

$.getJSON("database.json", function(data) {
  var imgTitle = data.posters[posterID].title
  imgTitle = imgTitle.replace(/&lt;br&gt;/g, ' ');
  if (imgTitle.length > 10){
    console.log('too long');
  }
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
