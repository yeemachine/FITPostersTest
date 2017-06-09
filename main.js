$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);
  });



var selectedItems = []
var state;
var posterID;

$( document ).ready(function() {

  var isMobile = window.matchMedia("only screen and (max-width: 800px)");
  if (isMobile.matches) {
      state="mobile"
  }else{
    state="desktop"
  }
  $(window).resize(function() {
    if (isMobile.matches) {
        state="mobile"
    }else{
      state="desktop"
    }
    console.log(state);
  });
////Click Posters for more info


   $('.imgsquare').click(function() {
     posterID = $(this).attr('id');
//////Poster view click
     if ($('.imgsquare').attr('state') != 'cartMode') {

         $.getJSON("database.json", function(data) {
             var imgURL = data.posters[posterID].url
             var imgTitle = data.posters[posterID].title
             var imgPara = data.posters[posterID].para
                  if (state === 'mobile'){
                  }
                  else{
                      var imgcontainer = document.getElementById('imgloader');
                      imgcontainer.style.backgroundImage = 'url('+imgURL+')';
                       $('.page1,.page2').css({'margin-top':'-99vh','transition':'1s'});
                      $('.main-nav').css({'top':'-99vh','transition':'1s'});
                  }
              $('#imgTitle').html(imgTitle);
              $('#imgCopy').html(imgPara);
         });
        $('body').css({'overflow-y':'hidden'});
        $('.hidden-page').css({'top':'0'});
        $('body').attr('status', 'locked');
      }
//////Cart view click
      else{
        var cartItem = this
         $.getJSON("database.json", function(data) {
           var imgTitle = data.posters[posterID].title
           var price = data.posters[posterID].price
              // imgTitle = imgTitle.replace('<br><br>', ", ");


           $(cartItem).toggleClass('selected');


        if ($(cartItem).attr('status') != 'selected') {
          $(cartItem).attr('status', 'selected');
          selectedItems.push(imgTitle);
        }else{
          $(cartItem).attr('status', '');
          selectedItems = selectedItems.filter(function(item) {
            return item !== imgTitle
          })
          }


          var selectedItemscontainer = $('<ul></ul>')

          for (i = 0; i < selectedItems.length; i++) {
            var selectedItemsnode = $('<li>'+selectedItems[i]+'</li>')
              selectedItemscontainer.append(selectedItemsnode)
          }
          console.log(selectedItems.length);
          console.log(selectedItems);
          console.log(selectedItemscontainer);
          $('.item-list').html(selectedItemscontainer)

        });

      }
   });



   $('#buy').click(function() {
     $('#'+posterID).addClass('selected');
     $('#'+posterID).attr('status', 'selected');
      $.getJSON("database.json", function(data) {
        var imgTitle = data.posters[posterID].title
        selectedItems.push(imgTitle);
      });
   });
///Back to poster view
   $('.button').click(function() {
     $('.page1,.page2').css({'margin-top':'','transition':'1s'});
     $('.main-nav').css({'top':'','transition':'1s'});
     $('.hidden-page').css({'top':''});
      $('body').css({'overflow-x':''});
      $('body').css({'overflow-y':''});
      $('body').attr('status', '');
      $('.hidden-page').animate({scrollTop: (0)}, 200);

   });

///Go to cart state
  $('.cart').click(function() {
    $('.page1,.page2,.main-nav').css({'transition':''});
    $('.cart').addClass('selected');
    $('.posterNav').removeClass('selected');
    $('#lazy-container, .imgsquare, .page1, .page2, .posterNav, .cart, .hidden-page, .item-list').addClass('cartMode');
    $('.cartMode').attr('state', 'cartMode');
    $('.lazy').lazy({
               bind: "event",
               delay: 500
           });
  });

///Return to poster state
  $('.posterNav').click(function() {
    $('.cartMode').attr('state', '');
    $('.cartMode').removeClass('cartMode');
    $('.posterNav').addClass('selected');
    $('.cart').removeClass('selected');
  });

});
