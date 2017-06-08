$( document ).ready(function() {


  var isMobile = window.matchMedia("only screen and (max-width: 800px)");
  var page1X = $('.page1').width()/2;
  var page1Y = $('.page1').height()/2;
    if (isMobile.matches) {
      var lastScrollTop = 0;
      $('#lazy-container').on('scroll', function() {
          st = $(this).scrollTop();
          if(st > lastScrollTop && $(this).scrollTop()>page1Y && $('body').attr('status') != 'locked' ) {
            // console.log('down 1');
            $('.main-nav').css({'margin-top':'-10vh'})
          }
          else {
            // console.log('up 1');
            $('.main-nav').css({'margin-top':''})
          }
          lastScrollTop = st;
      });
    }else{
        var lastScrollLeft = 0;
        $('#lazy-container').on('scroll', function() {
            st = $(this).scrollLeft();
            if(st > lastScrollLeft && $(this).scrollLeft()>page1X && $('body').attr('status') != 'locked' ) {
              // console.log('down 1');
              $('.main-nav').css({'margin-top':'-10vh'})
            }
            else {
              // console.log('up 1');
              $('.main-nav').css({'margin-top':''})
            }
            lastScrollLeft = st;
        });
    }


});
