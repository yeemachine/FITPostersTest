$( document ).ready(function() {


  $('#lazy-container').on('scroll', function () {
    var lazyHeight = $('#lazy-container')[0].scrollHeight
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var lazyWidth = $('#lazy-container')[0].scrollWidth
    var scrollTop = $(this).scrollTop()
    var scrollLeft = $(this).scrollLeft()

        offsetY = scrollTop/(lazyHeight - windowHeight) * 100
        offsetX = scrollLeft/(lazyWidth - windowWidth) * 100

        var lastScrollTop = 0;
        var lastScrollLeft = 0;
        
    if (state === 'mobile'){
    }else{
      if($('body').hasClass('bookMode')){
        $('.nav-item.selected.book .progress').css({ 'width': offsetY + '%' });
        console.log(offsetY)
        if (offsetY === 100){
          $('.progress').css({'width':''});
          $('.cartMode, .bookMode, .aboutMode').attr('state', '');
          $('.cartMode').removeClass('cartMode');
          $('.bookMode').removeClass('bookMode');
          $('.aboutMode').removeClass('aboutMode');
          $('.posterNav').addClass('selected');
          $('.cart, .book, .about').removeClass('selected');
        }
      }
      else if($('body').hasClass('aboutMode')){
      }
      else if($('body').hasClass('cartMode')){
        $('.nav-item.selected.cart .progress').css({ 'width': offsetY + '%'});
        if (offsetY === 100){
          $('.progress').css({'width':''});
          $('.page1,.page2,.main-nav').css({'transition':''});
          $('.book').addClass('selected');
          $('.cartMode').removeClass('cartMode');
          $('.aboutMode').removeClass('aboutMode');
          $('.posterNav , .cart, .about').removeClass('selected');
          $('body, #lazy-container, .imgsquare, .imgCon, .page1, .page2, .page3, .posterNav, .cart, .hidden-page, .item-list').addClass('bookMode');
          $('.cartMode').attr('state', 'bookMode');
          $('#lazy-container, body').scrollTop(0);
        }
      }else{
        $('.nav-item.selected.posterNav .progress').css({ 'width': offsetX + '%'});
        if (offsetX === 100){
          $('.progress').css({'width':''});
          $('.bookMode').removeClass('bookMode');
          $('.aboutMode').removeClass('aboutMode');
          $('.page1,.page2,.main-nav').css({'transition':''});
          $('.cart').addClass('selected');
          $('.book, .posterNav, .about').removeClass('selected');
          $('body, #lazy-container, .imgsquare, .imgCon, .page1, .page2, .page3, .posterNav, .cart, .hidden-page, .item-list').addClass('cartMode');
          $('.cartMode').attr('state', 'cartMode');
          $('#lazy-container, body').scrollTop(0);
        }
      }
    }
    });

    $(document).on('scroll', function () {
      var bodyHeight = $('body')[0].scrollHeight
      var windowHeight = $(window).height();
      var scrollTop = $(this).scrollTop()
          offsetY = scrollTop/(bodyHeight - windowHeight) * 100
            if (state === 'mobile'){
              if($('body').hasClass('bookMode')){
                $('.nav-item.selected.book .progress').css({ 'width': offsetY + '%'});
              }
              else if($('body').hasClass('aboutMode')){
              }
              else if($('body').hasClass('cartMode')){
                $('.nav-item.selected.cart .progress').css({ 'width': offsetY + '%'});
              }else{
                $('.nav-item.selected.posterNav .progress').css({ 'width': offsetY + '%'});
              }
            }

    });


});
