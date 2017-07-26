$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);
    $(window).scrollTop(0);

  });



var selectedItems = {}
var state;
var posterID;
var posterIDnum;
var paypalformat = []
var response = {}
var country;
var shipping;
$( document ).ready(function() {
  var requestUrl = "http://ip-api.com/json";

  $.ajax({
    url: requestUrl,
    type: 'GET',
    success: function(json)
    {
      console.log("My country is: " + json.country);
      country = json.country
      if (json.country === "United States"){
        shipping = 7.50

      }else{
        shipping = 14.50

      }
        $('.shipping a').html('$' + shipping.toFixed(2))
    },
    error: function(err)
    {
      console.log("Request failed, error= " + err);
    }
  });

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/17W4qTyN9c_vzsb1JxyGLnzCX6qQbichYeSqQQNXzmrM/edit?usp=sharing';
  init()
  function init() {
   Tabletop.init( { key: public_spreadsheet_url,
                    callback: showInfo,
                    simpleSheet: true,
                    parseNumbers:true } )
 }

 function showInfo(data, tabletop) {
   response = data
 };


var identifier = window.location.hash;
console.log(identifier);

if (identifier === "#posters"){
  $('.preview').removeClass('preview');
  $('.progress').css({'width':''});
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
  $('#lazy-container, body').scrollTop(0);
}
if (identifier === "#bag"){
  $('.preview').removeClass('preview');
  $('.progress').css({'width':''});
  $('.bookMode').removeClass('bookMode');
  $('.aboutMode').removeClass('aboutMode');
  $('.page1,.page2,.main-nav').css({'transition':''});
  $('.cart').addClass('selected');
  $('.book, .posterNav, .about').removeClass('selected');
  $('body, #lazy-container, .imgsquare, .imgCon, .page1, .page2, .page3, .posterNav, .cart, .hidden-page, .item-list').addClass('cartMode');
  $('.cartMode').attr('state', 'cartMode');
  if (state === 'mobile'){
    $('.show').removeClass('show');
    $('.hamburger').toggleClass('fa-bars fa-times')
  }
  $('.lazy').lazy({
             bind: "event",
             delay: 500
         });

  $('#lazy-container, body').scrollTop(0);
}



  var isMobile = window.matchMedia("only screen and (max-width: 1000px)");
  if (isMobile.matches) {
      state="mobile"
      $('.home').html('Poster Works for FIT');
      $('.cover div').html('Poster Works for FIT');
      $('.button i').removeClass('fa-angle-up')
      $('.button i').addClass('fa-angle-left')
      $('.cover').css({'animation':'splash 3s forwards'});
      $('.cover div').css({'animation':'splash2 3s forwards'});
  }else{
    state="desktop"
    $('.cover').css({'animation':'splash 3s forwards'});
    $('.cover div').css({'animation':'splash2 3s forwards'});
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





////Click Posters for more info


   $('.imgCon').click(function() {
     posterID = jQuery(this).find("img").attr('id');
     posterIDnum =  parseInt(posterID.replace(/[^0-9\.]+/g, ""));
     console.log(posterIDnum);
//////Poster view click
     if ($('.imgsquare').attr('state') != 'cartMode') {

//////JSON File Fallback
        //  $.getJSON("database.json", function(data) {
        //      var imgURL = data.posters[posterID].url
        //      var imgTitle = data.posters[posterID].title
        //      var imgPara = data.posters[posterID].para
        //           if (state === 'mobile'){
        //           }
        //           else{
        //               var imgcontainer = document.getElementById('imgloader');
        //               imgcontainer.style.backgroundImage = 'url('+imgURL+')';
        //                $('.page1,.page2').addClass('slide');
        //               $('.main-nav').css({'opacity':'0'});
        //           }
        //       $('#imgTitle').html(imgTitle);
        //       $('#imgCopy').html(imgPara);
        //  });


        console.log(response[posterIDnum].url)
        var imgURL = response[posterIDnum].url
         var imgTitle = response[posterIDnum].title
         var imgPara = response[posterIDnum].para

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
      // if (jQuery(this).find("img").hasClass('cartMode')){
      //   addCart();
      //   console.log('hi');
      // }
   });
  //  $('.imgsquare').click(function() {
  //    addCart();
  //   });
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
  $('.cart a').click(function() {
    $('.sticky').removeClass('sticky');
    $('.sticky2').removeClass('sticky2');
    $('.preview').removeClass('preview');
    $('.progress').css({'width':''});
    $('.bookMode').removeClass('bookMode');
    $('.aboutMode').removeClass('aboutMode');
    $('.page1,.page2,.main-nav').css({'transition':''});
    $('.cart').addClass('selected');
    $('.book, .posterNav, .about').removeClass('selected');
    $('body, #lazy-container, .imgsquare, .imgCon, .page1, .page2, .page3, .page4,.posterNav, .cart, .hidden-page, .item-list').addClass('cartMode');
    $('.cartMode').attr('state', 'cartMode');
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
    $('.lazy').lazy({
               bind: "event",
               delay: 500
           });

    $('#lazy-container, body').scrollTop(0);
  });

///Go to book page
  $('.book a').click(function() {
    $('.sticky').removeClass('sticky');
    $('.sticky2').removeClass('sticky2');
    $('.preview').removeClass('preview');
    $('.progress').css({'width':''});
    $('.page1,.page2,.main-nav').css({'transition':''});
    $('.book').addClass('selected');
    $('.cartMode').removeClass('cartMode');
    $('.aboutMode').removeClass('aboutMode');
    $('.posterNav , .cart, .about').removeClass('selected');
    $('body, #lazy-container, .imgsquare, .imgCon, .page1, .page2, .page3, .page4,.posterNav, .cart, .hidden-page, .item-list').addClass('bookMode');
    $('.cartMode').attr('state', 'bookMode');
    if (state === 'mobile'){
      $('.show').removeClass('show');
      $('.hamburger').toggleClass('fa-bars fa-times')
    }
    $('#lazy-container, body').scrollTop(0);
  });

///
$('.about a').click(function() {
  $('.sticky').removeClass('sticky');
  $('.sticky2').removeClass('sticky2');
  $('.preview').removeClass('preview');
  $('.progress').css({'width':''});
  $('.page1,.page2,.main-nav').css({'transition':''});
  $('.about').addClass('selected');
  $('.posterNav , .cart, .book').removeClass('selected');
  $('.cartMode').removeClass('cartMode');
  $('.bookMode').removeClass('bookMode');
  $('body, #lazy-container, .imgsquare, .imgCon, .page1, .page2, .page3, .page4, .posterNav, .cart, .hidden-page, .item-list').addClass('aboutMode');
  $('.cartMode').attr('state', 'aboutMode');
  if (state === 'mobile'){
    $('.show').removeClass('show');
    $('.hamburger').toggleClass('fa-bars fa-times')
  }
  $('#lazy-container, body').scrollTop(0);
});

///Return to poster state
  $('.posterNav a').click(function() {
    $('.sticky').removeClass('sticky');
    $('.sticky2').removeClass('sticky2');
    $('.preview').removeClass('preview');
    $('.progress').css({'width':''});
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
    $('#lazy-container, body').scrollTop(0);
  });


for(let s = 0; s < 26; s ++) {
  $(document).on("mouseenter", '.imgCon.poster'+s, function(){
    $('li.poster'+s).addClass('hovered');
    // $('.poster'+s+'.selected.cartMode .quantity').addClass('hovered');
    // $('.poster'+s+'.selected.cartMode.imgsquare').addClass('hovered');
  });
  $(document).on("mouseleave", '.imgCon.poster'+s, function(){
    $('li.poster'+s).removeClass('hovered');
    // $('.poster'+s+'.cartMode .quantity').removeClass('hovered');
    // $('.poster'+s+'.cartMode.imgsquare').removeClass('hovered');

  });
}
  $(document).on("mouseenter", '.plus', function(){

  });

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
