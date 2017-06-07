$(window).scroll(function() {

  var windowPosX = $(this).scrollLeft();
  var windowPosY = $(this).scrollTop();
  var page1X = $('.page1').width()/2;
  var page1Y = $('.page1').height()/2;
  var lastScrollLeft = windowPosX;
  var lastScrollTop = windowPosY;

  var isMobile = window.matchMedia("only screen and (max-width: 800px)");
  if (isMobile.matches) {
    window.addEventListener("scroll", function() {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && $(this).scrollTop()>page1Y && $('body').attr('status') != 'locked') {
        // downscroll code
        // console.log('scrolldown')
        $('.main-nav').css({'margin-top':'-10vh'})
      } else {
        // console.log('scrollup')
        $('.main-nav').css({'margin-top':''})
        // upscroll code
      }
      lastScrollTop = st
    }, false);
  }else{
    window.addEventListener("scroll", function() {
      var st = window.pageXOffset || document.documentElement.scrollLeft;
      if (st > lastScrollLeft && $(this).scrollLeft()>page1X && $('body').attr('status') != 'locked') {
        // downscroll code
        // console.log('scrolldown')
        $('.main-nav').css({'margin-top':'-10vh'})
      } else {
        // console.log('scrollup')
        $('.main-nav').css({'margin-top':''})
        // upscroll code
      }
      lastScrollLeft = st
    }, false);
  }






});
