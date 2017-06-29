function addCart(){

$.getJSON("database.json", function(data) {
  var imgTitle = data.posters[posterID].title
  if (imgTitle.length > 23){
    console.log('too long');
    imgTitle = imgTitle.substring(0, 26) + '...';
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

  for (i = 0; i < objectSelector.length; i++) {
    objectSelector2 = objectSelector[i];

    name = selectedItems[objectSelector2].imgTitle
    pricePer = selectedItems[objectSelector2].price
    unit = selectedItems[objectSelector2].qty
    subPrice = pricePer * unit

    var selectedItemsnode = $('<li class="'+objectSelector2+'"><div>'+name+" </div><div> $"+pricePer+' </div></li>')
      selectedItemscontainer.append(selectedItemsnode)
      totalPrice = totalPrice + subPrice
      totalItems = totalItems + unit
  }
  console.log(totalPrice);
  var subTotal = $('<li class="subTotal"><div>Subtotal:</div><div>$'+totalPrice+'</div></li>')
  selectedItemscontainer.append(subTotal)
  $('.cart').html("<a>Buy ("+totalItems+")</a>")
  $('.item-list').html(selectedItemscontainer)
  $('li.'+posterID).css({'animation':'red .5s linear'});
  $('li.'+posterID).addClass('hovered');


});
}
