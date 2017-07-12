$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);

  });



var selectedItems = {}
var state;
var posterID;

$( document ).ready(function() {
  // $('#lazy-container, .imgsquare, .page1, .page2, .posterNav, .cart, .hidden-page, .item-list').addClass('bookMode');
  // $('.cartMode').attr('state', 'bookMode');

  var isMobile = window.matchMedia("only screen and (max-width: 900px)");
  if (isMobile.matches) {
      state="mobile"
      $('.home').html('Poster Works for FIT');
      $('.cover div').html('Poster Works for FIT');
      $('.button i').removeClass('fa-angle-up')
      $('.button i').addClass('fa-angle-left')
  }else{
    state="desktop"
  }
  $(window).resize(function() {
    if (isMobile.matches) {
        state="mobile"
        $('.home').html('Poster Works for FIT')
        $('.button i').removeClass('fa-angle-up')
        $('.button i').addClass('fa-angle-left')
    }else{
      state="desktop"
      $('.home').html('Rocco Piscatello: Poster Works for FIT')
      $('.button i').removeClass('fa-angle-left')
      $('.button i').addClass('fa-angle-up')
    }
    console.log(state);
  });


$('.cover div').css({'animation':'splash2 3s forwards'});
$('.cover').css({'animation':'splash 3s forwards'});

////Click Posters for more info


   $('.imgsquare').click(function() {
     posterID = $(this).attr('id');
     console.log(posterID);
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
                       $('.page1,.page2').addClass('slide');
                      $('.main-nav').css({'opacity':'0'});
                  }
              $('#imgTitle').html(imgTitle);
              $('#imgCopy').html(imgPara);
         });
        $('body').css({'overflow-y':'hidden'});
        $('.hidden-page').addClass('slide');
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
     $('.page1,.page2').removeClass('slide');
     $('.main-nav').css({'opacity':''});
     $('.hidden-page').removeClass('slide');
      $('body').css({'overflow-x':''});
      $('body').css({'overflow-y':''});
      $('body').attr('status', '');
      $('.hidden-page').animate({scrollTop: (0)}, 200);
      $('#buy').attr('class','');

   });

///Go to cart state
  $('.cart').click(function() {
    $('.bookMode').removeClass('bookMode');
    $('.aboutMode').removeClass('aboutMode');
    $('.page1,.page2,.main-nav').css({'transition':''});
    $('.cart').addClass('selected');
    $('.book, .posterNav, .about').removeClass('selected');
    $('#lazy-container, .imgsquare, .page1, .page2, .page3, .posterNav, .cart, .hidden-page, .item-list').addClass('cartMode');
    $('.cartMode').attr('state', 'cartMode');
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
    $('.lazy').lazy({
               bind: "event",
               delay: 500
           });

    $('#lazy-container').scrollTop(0);
  });

///Go to book page
  $('.book').click(function() {
    $('.page1,.page2,.main-nav').css({'transition':''});
    $('.book').addClass('selected');
    $('.cartMode').removeClass('cartMode');
    $('.aboutMode').removeClass('aboutMode');
    $('.posterNav , .cart, .about').removeClass('selected');
    $('#lazy-container, .imgsquare, .page1, .page2, .page3, .posterNav, .cart, .hidden-page, .item-list').addClass('bookMode');
    $('.cartMode').attr('state', 'bookMode');
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
    $('#lazy-container').scrollTop(0);
  });

///
$('.about').click(function() {
  $('.page1,.page2,.main-nav').css({'transition':''});
  $('.about').addClass('selected');
  $('.posterNav , .cart, .book').removeClass('selected');
  $('.cartMode').removeClass('cartMode');
  $('.bookMode').removeClass('bookMode');
  $('#lazy-container, .imgsquare, .page1, .page2, .page3, .posterNav, .cart, .hidden-page, .item-list').addClass('aboutMode');
  $('.cartMode').attr('state', 'aboutMode');
  if (state === 'mobile'){
    $('.show').removeClass('show');
    $('.hamburger').toggleClass('fa-bars fa-times')
  }
  $('#lazy-container').scrollTop(0);
});

///Return to poster state
  $('.posterNav').click(function() {
    $('.cartMode, .bookMode, .aboutMode').attr('state', '');
    $('.cartMode').removeClass('cartMode');
    $('.bookMode').removeClass('bookMode');
    $('.aboutMode').removeClass('aboutMode');
    $('.posterNav').addClass('selected');
    $('.cart, .book, .about').removeClass('selected');
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
  });


for(let s = 0; s < 25; s ++) {
  $(document).on("mouseenter", '.imgsquare.poster'+s, function(){
    $('li.poster'+s).addClass('hovered');
    $('.poster'+s+'.selected.cartMode .quantity').addClass('hovered');
    $('.poster'+s+'.selected.cartMode.imgsquare').addClass('hovered');
  });
  $(document).on("mouseleave", '.imgsquare.poster'+s, function(){
    $('li.poster'+s).removeClass('hovered');
    $('.poster'+s+'.cartMode .quantity').removeClass('hovered');
    $('.poster'+s+'.cartMode.imgsquare').removeClass('hovered');

  });
}
///hamburger menu
$('.hamburger').on("click", function(){
  $('.main-nav, .nav-item, .home, .hamburger').toggleClass('show')
  $(this).toggleClass('fa-bars fa-times')
});


///scroll over fixed element fix
$('.bookIntro h2, .item-list').on('mousewheel DOMMouseScroll', function(event) {
    if (state === 'mobile'){

    }else{
      $('#lazy-container').scrollTop($('#lazy-container').scrollTop() - (event.originalEvent.wheelDelta*.5 || -event.originalEvent.detail/120));
    }

});



});
