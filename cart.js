function addCart(){

$.getJSON("database.json", function(data) {
  var imgTitle = data.posters[posterID].title
  if (imgTitle.length > 34){
    console.log('too long');
    imgTitle = imgTitle.substring(0, 34) + '...';
  }
  var price = data.posters[posterID].price
  var qty = 1
  var selectedItemscontainer = $('<ul></ul>')
  if ($('.'+posterID).attr('status') != 'selected') {
    $('.'+posterID).addClass('selected');
    $('.'+posterID).attr('status', 'selected');
    $('#buy').attr('status','selected');
    $('#buy h3').html('Remove from Bag');
    $('#buy h3').addClass('selected');
    selectedItems[posterID] = {imgTitle,price,qty};
    $('.'+posterID).addClass(imgTitle);
    console.log(Object.keys(selectedItems)[0]);
    $('.'+posterID+' .plus').html('&minus;');
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

    name = selectedItems[objectSelector2].imgTitle
    pricePer = selectedItems[objectSelector2].price
    unit = selectedItems[objectSelector2].qty
    subPrice = pricePer * unit

    fraction = 1 - objectSelector.length/24
    fontSize = 2 + 1 * fraction

    var selectedItemsnode = $('<li class="'+objectSelector2+'"><div>'+name+" </div><div> $"+pricePer+' </div></li>')
      selectedItemscontainer.append(selectedItemsnode)
      totalPrice = totalPrice + subPrice
      taxed = (totalPrice * 1.10 + 5).toFixed(2);
      tax = (totalPrice * 0.10 + 5).toFixed(2);
      totalItems = totalItems + unit
  }
  console.log(totalPrice);
  if (objectSelector.length === 0){
    idleCart = $('<li class="idleCart"><div>You currently have no items selected.</div></li>')
    selectedItemscontainer.append(idleCart)
  }
  if (objectSelector.length > 0){
    $('.checkout').addClass('selected')
  }else{
    $('.checkout').removeClass('selected')
  }
  var subTotal = $('<li class="subTotal"><div>Total:</div><div>$'+taxed+'</div></li>')
  selectedItemscontainer.append(subTotal)
  $('.cart').html("<a>Bag ("+totalItems+")</a>")
  $('.tax').html("<div>Tax(11.54%):</div><a>$"+tax+"</a>")
  $('.item-list section').html(selectedItemscontainer)
  $('li.'+posterID).css({'animation':'red .5s linear'});
  // $('li.'+posterID).addClass('hovered');


});
}
