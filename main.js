$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);
  });


$( document ).ready(function() {

  var state = ""
  var isMobile = window.matchMedia("only screen and (max-width: 800px)");
  if (isMobile.matches) {
      state="mobile"
  }else{
    state="desktop"
  }
  console.log(state);
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

//////Poster view click
     if ($('.imgsquare').attr('state') != 'cartMode') {
         var posterID = $(this).attr('id');
         $.getJSON("database.json", function(data) {
             var imgURL = data.posters[posterID].url
             var imgTitle = data.posters[posterID].title
             var imgPara = data.posters[posterID].para
                  if (state === 'mobile'){
                  }
                  else{
                      var imgcontainer = document.getElementById('imgloader');
                      imgcontainer.style.backgroundImage = 'url('+imgURL+')';
                      console.log(state);
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
    $('.cart').addClass('selected');
    $('.posterNav').removeClass('selected');
    $('#lazy-container, .imgsquare, .page1, .page2, .posterNav, .cart, .hidden-page').addClass('cartMode');
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
