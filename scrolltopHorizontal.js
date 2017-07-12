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
            $('.main-nav').css({'opacity':'0'})
          }
          else {
            // console.log('up 1');
            $('.main-nav').css({'opacity':''})
          }
          lastScrollTop = st;
      });
    }else{
        var lastScrollLeft = 0;
        $('#lazy-container').on('scroll', function() {
            st = $(this).scrollLeft();
            if(st > lastScrollLeft && $(this).scrollLeft()>page1X && $('body').attr('status') != 'locked' ) {
              // console.log('down 1');
              $('.main-nav').css({'opacity':'0'})
            }
            else {
              // console.log('up 1');
              $('.main-nav').css({'opacity':''})
            }
            lastScrollLeft = st;

            if ($(this).hasClass('bookMode')){
              height = $('.main-nav').height()
              st = $(this).scrollTop();
              if(st > height){
                $('.bookIntro h2').addClass('sticky')
              }
              if( st < height){
                $('.bookIntro h2').removeClass('sticky')
              }
            }


        });
    }




    document.body.addEventListener("mousemove", function(event) {
        window.innerHTML = event.clientY;
        windowHeight = document.documentElement.clientHeight * 0.075;

        //Check if we are in the top area of the page.
        if(event.clientY < windowHeight) {
              $('.main-nav').css({'opacity':''})
        }

    });


});
