$( document ).ready(function() {


  var isMobile = window.matchMedia("only screen and (max-width: 800px)");
  var page1X = $('.page1').width()*.65;
  var page1Y = $('.page1').height()/2;

      var lastScrollTop = 0;
      var lastScrollLeft = 0;
      $('#lazy-container').on('scroll', function() {
          if (isMobile.matches) {


          st = $(this).scrollTop();
          if(st > lastScrollTop && $(this).scrollTop()>page1Y && $('body').attr('status') != 'locked' ) {
            // console.log('down 1');
            // $('.main-nav').css({'opacity':'0'})
          }
          else {
            // console.log('up 1');
            // $('.main-nav').css({'opacity':''})
          }
          lastScrollTop = st;
          }else{
            st = $(this).scrollLeft();
            if(st > lastScrollLeft && $(this).scrollLeft()>page1X && $('body').attr('status') != 'locked' ) {
              // console.log('down 1');
              // $('.main-nav').css({'opacity':'0'})
            }
            else {
              // console.log('up 1');
              // $('.main-nav').css({'opacity':''})
            }
            lastScrollLeft = st;

            if ($(this).hasClass('bookMode')){
              height = $('.main-nav').height()
              st = $(this).scrollTop();
              if(st > height){
                $('.page3 .bookIntro h2').addClass('sticky')
              }
              if( st < height){
                $('.page3 .bookIntro h2').removeClass('sticky')
              }
            }
            if ($(this).hasClass('aboutMode')){
              height = $('.main-nav').height()*0
              stickypad = $(window).height()*.25
              stickypad2 = $(window).height()*.1
              stickypad3 = $(window).height()*.55


              height2 = height + $('.page4 .bookIntro:nth-child(1)').height() - stickypad3
              height3 = height + $('.page4 .bookIntro:nth-child(1)').height() + stickypad2
              height4 = height3 + $('.page4 .bookIntro:nth-child(2)').height() - stickypad3
              height5 = height3 + $('.page4 .bookIntro:nth-child(2)').height() + stickypad2
              height6 = height5 + $('.page4 .bookIntro:nth-child(3)').height() - stickypad3

              st = $(this).scrollTop();
              if(height < st < height2){
                $('.page4 .bookIntro:nth-child(1) h2').addClass('sticky')
              }
              if(st > height2){
                $('.page4 .bookIntro:nth-child(1) h2').addClass('sticky2')
              }
              if(st < height2){
                $('.page4 .bookIntro:nth-child(1) h2').removeClass('sticky2')
              }
              if( st < height){
                $('.page4 .bookIntro:nth-child(1) h2').removeClass('sticky')
              }

              if (height3 < st < height4){
                $('.page4 .bookIntro:nth-child(2) h2').addClass('sticky')
              }
              if (st > height4){
                $('.page4 .bookIntro:nth-child(2) h2').addClass('sticky2')
              }
              if (st < height4){
                $('.page4 .bookIntro:nth-child(2) h2').removeClass('sticky2')
              }
              if (st < height3){
                $('.page4 .bookIntro:nth-child(2) h2').removeClass('sticky')
              }

              if (height5 < st < height6){
                $('.page4 .bookIntro:nth-child(3) h2').addClass('sticky')
              }
              if (st > height6){
                $('.page4 .bookIntro:nth-child(3) h2').addClass('sticky2')
              }
              if (st < height6){
                $('.page4 .bookIntro:nth-child(3) h2').removeClass('sticky2')
              }
              if (st < height5){
                $('.page4 .bookIntro:nth-child(3) h2').removeClass('sticky')
              }

            }
          }
      });




    // document.body.addEventListener("mousemove", function(event) {
    //     window.innerHTML = event.clientY;
    //     windowHeight = document.documentElement.clientHeight * 0.075;
    //
    //     //Check if we are in the top area of the page.
    //     if(event.clientY < windowHeight) {
    //           $('.main-nav').css({'opacity':''})
    //     }
    //
    // });


});
