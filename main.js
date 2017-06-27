$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);

  });



var selectedItems = {}
var state;
var posterID;

$( document ).ready(function() {
  $('#lazy-container, .imgsquare, .page1, .page2, .posterNav, .cart, .hidden-page, .item-list').addClass('bookMode');
  $('.cartMode').attr('state', 'bookMode');

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
                       $('.page1,.page2').css({'margin-top':'-99vh','transition':'.25s'});
                      $('.main-nav').css({'opacity':'0'});
                  }
              $('#imgTitle').html(imgTitle);
              $('#imgCopy').html(imgPara);
         });
        $('body').css({'overflow-y':'hidden'});
        $('.hidden-page').css({'top':'0'});
        $('body').attr('status', 'locked');

////////reloads saved status
        if ($('#'+posterID).attr('status') === 'selected'){
            $('#buy').attr('status','selected');
            $('#buy h3').html('Remove from Cart');
            $('#buy h3').addClass('selected');
        }else{
          $('#buy h3').html('Add to Cart');
          $('#buy h3').removeClass('selected');
        }
      }
//////Cart view click
      else{
        var cartItem = '.'+posterID
        // addCart();
      }
   });
   $('.plus').click(function() {
     plus();
    });
    $('.minus').click(function() {
      minus();
     });


   $('#buy').click(function() {
     addCart();
   });
///Back to poster view
   $('.button').click(function() {
     $('.page1,.page2').css({'margin-top':'','transition':'.25s'});
     $('.main-nav').css({'opacity':''});
     $('.hidden-page').css({'top':''});
      $('body').css({'overflow-x':''});
      $('body').css({'overflow-y':''});
      $('body').attr('status', '');
      $('.hidden-page').animate({scrollTop: (0)}, 200);
      $('#buy').attr('class','');

   });

///Go to cart state
  $('.cart').click(function() {
    $('.bookMode').removeClass('bookMode');
    $('.page1,.page2,.main-nav').css({'transition':''});
    $('.cart').addClass('selected');
    $('.book, .posterNav').removeClass('selected');
    $('#lazy-container, .imgsquare, .page1, .page2, .posterNav, .cart, .hidden-page, .item-list').addClass('cartMode');
    $('.cartMode').attr('state', 'cartMode');
    $('.lazy').lazy({
               bind: "event",
               delay: 500
           });
  });

///Go to book page
  $('.book').click(function() {
    $('.page1,.page2,.main-nav').css({'transition':''});
    $('.book').addClass('selected');
    $('.posterNav , .cart').removeClass('selected');
    $('#lazy-container, .imgsquare, .page1, .page2, .posterNav, .cart, .hidden-page, .item-list').addClass('bookMode');
    $('.cartMode').attr('state', 'bookMode');
  });


///Return to poster state
  $('.posterNav').click(function() {
    $('.cartMode, .bookMode').attr('state', '');
    $('.cartMode').removeClass('cartMode');
    $('.bookMode').removeClass('bookMode');
    $('.posterNav').addClass('selected');
    $('.cart,.book').removeClass('selected');
  });


for(let s = 0; s < 25; s ++) {
$(document).on("mouseover",'.poster'+s, function(){
  $('li.poster'+s).css({'color':'red'});
});
$(document).on("mouseout",'.poster'+s, function(){
  $('li.poster'+s).css({'color':'','animation':''});
});

}





});
