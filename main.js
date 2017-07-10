$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);

  });



var selectedItems = {}
var state;
var posterID;

$( document ).ready(function() {
  // $('#lazy-container, .imgsquare, .page1, .page2, .posterNav, .cart, .hidden-page, .item-list').addClass('bookMode');
  // $('.cartMode').attr('state', 'bookMode');

  var isMobile = window.matchMedia("only screen and (max-width: 800px)");
  if (isMobile.matches) {
      state="mobile"
      $('.home').html('Poster Works for FIT')
  }else{
    state="desktop"
  }
  $(window).resize(function() {
    if (isMobile.matches) {
        state="mobile"
        $('.home').html('Poster Works for FIT')
    }else{
      state="desktop"
      $('.home').html('Rocco Piscatello: Poster Works for FIT')
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
            $('#buy h3').html('Remove from Bag');
            $('#buy h3').addClass('selected');
        }else{
          $('#buy h3').html('Add to Bag');
          $('#buy h3').removeClass('selected');
        }
      }
//////Cart view click
      else{
        var cartItem = '.'+posterID
        // addCart();
      }
      if ($(this).hasClass('cartMode')){
        addCart();
        console.log('hi');
      }
   });
  //  $('.imgsquare').click(function() {
  //    addCart();
  //   });
    // $('.minus').click(function() {
    //   addCart();
    //  });


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
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
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
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
  });


///Return to poster state
  $('.posterNav').click(function() {
    $('.cartMode, .bookMode').attr('state', '');
    $('.cartMode').removeClass('cartMode');
    $('.bookMode').removeClass('bookMode');
    $('.posterNav').addClass('selected');
    $('.cart,.book').removeClass('selected');
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
  });


for(let s = 0; s < 25; s ++) {
$('.poster'+s).on("mouseenter", function(){
  $('li.poster'+s).addClass('hovered');
  $('.poster'+s+'.selected.cartMode .quantity').addClass('hovered');
  $('.poster'+s+'.selected.cartMode.imgsquare').addClass('hovered');
});
$('.poster'+s).on("mouseleave", function(){
  $('li.poster'+s).removeClass('hovered');
  $('.poster'+s+'.cartMode .quantity').removeClass('hovered');
  $('.poster'+s+'.cartMode.imgsquare').removeClass('hovered');

});

}
$('.hamburger').on("click", function(){
  console.log('ham')
  // if ($('.home').hasClass('show')){
  //   $('.home').css({'opacity':'1'})
  // }else{
  //   $('.home').css({'opacity':'0'})
  // }
  $('.main-nav, .nav-item, .home, .hamburger').toggleClass('show')

  $(this).toggleClass('fa-bars fa-times')
});
// $(document).on("mouseover",'.minus', function(){
//   container = $(this).closest('.quantity').children('.qtyNum')
//   container.css({'opacity':'.5'});
// });
// $(document).on("mouseout",'.minus', function(){
//   container = $(this).closest('.quantity').children('.qtyNum')
//   container.css({'opacity':''});
// });







});
