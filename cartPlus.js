function plus(){

  $.getJSON("database.json", function(data) {
    var name = response[posterIDnum].title
      if (name.length > 34){
        console.log('too long');
        name = name.substring(0, 34) + '...';
      }
    var price = response[posterIDnum].price
    var stock = response[posterIDnum].quantity
    var quantity = 0
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
        // $('.'+posterID+' .plus').html('');
        $('.'+posterID+'.cartMode .quantity').removeClass('hovered');


      }
      if (selectedItems[posterID].quantity === stock){
        $('#alert').html("We do not have any more of this item.");
        $('#alert').css({"transform":"translate3d(0px, 0px, 0px)"});
        setTimeout(function(){ $('#alert').css({"transform":""}); }, 3000);

      }
      if(selectedItems[posterID].quantity === 10){
        $('#alert').html("You've reached the maximum quantity for this product.");
        $('#alert').css({"transform":"translate3d(0px, 0px, 0px)"});
        setTimeout(function(){ $('#alert').css({"transform":""}); }, 3000);
      }

      if ($('.'+posterID).attr('status') === 'selected' && 0 <= selectedItems[posterID].quantity && selectedItems[posterID].quantity < 10 && selectedItems[posterID].quantity < stock) {
        quantity = selectedItems[posterID].quantity + 1;
        selectedItems[posterID] = {name,quantity,price,currency};
        console.log(selectedItems[posterID].quantity);
        $('.'+posterID+' .qtyNum').html(selectedItems[posterID].quantity);
      }

    objectSelector = Object.keys(selectedItems)
    totalPrice = 0
    totalItems = 0
    tax = 0
    taxed = 0


      for (i = 0; i < objectSelector.length; i++) {
        objectSelector2 = objectSelector[i];

        name = selectedItems[objectSelector2].name
        pricePer = selectedItems[objectSelector2].price
        unit = selectedItems[objectSelector2].quantity
        subPrice = pricePer * unit


      var selectedItemsnode = $('<li class="listItem '+objectSelector2+'"><div>'+name+" </div><div>"+unit+"</div><div> $"+pricePer*unit+' </div></li>')
        selectedItemscontainer.append(selectedItemsnode)
        totalPrice = totalPrice + subPrice
        tax = +((totalPrice + shipping) * 0.08875).toFixed(2);
        taxed = +(totalPrice + shipping + tax).toFixed(2);
        totalItems = totalItems + unit

      }
    console.log(totalPrice);
      if (objectSelector.length === 0){
        idleCart = $('<li class="idleCart"><div>You currently have no items selected.</div></li>')
        selectedItemscontainer.append(idleCart)
        $('.tax').html("<div>Tax(8.875%):</div><a>$"+0+"</a>")
      }
      if (objectSelector.length > 0){
        $('.checkout, .tax, .shipping, .subtotal').addClass('selected')
        $('.tax').html("<div>Tax(8.875%):</div><a>$"+tax+"</a>")
         subTotal = $('<li class="subTotal selected"><div>Total:</div><div>$'+taxed+'</div></li>')
      }else{
        $('.checkout, .tax, .shipping, .subtotal').removeClass('selected')
         subTotal = $('<li class="subTotal"><div>Total:</div><div>$'+taxed+'</div></li>')
      }

      selectedItemscontainer.append(subTotal)
      $('.cart a p').html("Bag ("+totalItems+")")

      $('.item-list section').html(selectedItemscontainer)
      // $('li.'+posterID).css({'animation':'red 1s linear'});

      paypalShip = {name:'Shipping', quantity:1, price:shipping, currency:'USD'}
      paypalTax = {name:'Tax', quantity:1, price:tax, currency:'USD'}

      paypalformat = Object.values(selectedItems)
      paypalformat.push(paypalShip, paypalTax)
      console.log(paypalformat);
    });
}
