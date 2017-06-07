$(window).on('beforeunload', function() {
    $(window).scrollLeft(0);
  });




  $(function() {
       $('.lazy').lazy();
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

   $('.imgsquare').click(function() {
     var posterID = $(this).attr('id');

       $.getJSON("database.json", function(data) {
         var imgURL = data.posters[posterID].url
         var imgTitle = data.posters[posterID].title
         var imgPara = data.posters[posterID].para
            if (state === 'mobile'){
               $('body').css({'overflow-y':'hidden'});
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

      //  $('body').css({'overflow-y':'auto'});
       $('.hidden-page').css({'top':'0vh'});
       $('body').attr('status', 'locked');



   });
   $('.button').click(function() {
     $('.page1,.page2').css({'margin-top':'','transition':'1s'});
     $('.main-nav').css({'top':'','transition':'1s'});
     $('.hidden-page').css({'top':''});
      $('body').css({'overflow-x':''});
      $('body').css({'overflow-y':''});
      $('body').attr('status', '');
      $('.hidden-page').animate({scrollTop: (0)}, 200);

   });



});
