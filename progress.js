$( document ).ready(function() {


  $('#lazy-container').on('scroll', function () {
    var lazyHeight = $('#lazy-container')[0].scrollHeight
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var lazyWidth = $('#lazy-container')[0].scrollWidth
    var scrollTop = $(this).scrollTop()
    var scrollLeft = $(this).scrollLeft()

        offsetY = scrollTop/(lazyHeight - windowHeight) * 100 + '%'
        offsetX = scrollLeft/(lazyWidth - windowWidth) * 100 + '%'

    if (state === 'mobile'){
    }else{
      if($('body').hasClass('bookMode')){
        $('.nav-item.selected.book .progress').css({ 'width': offsetY });
      }
      else if($('body').hasClass('aboutMode')){
        console.log(offsetY);
      }
      else if($('body').hasClass('cartMode')){
        $('.nav-item.selected.cart .progress').css({ 'width': offsetY });
      }else{
        $('.nav-item.selected.posterNav .progress').css({ 'width': offsetX });
      }
    }
    });

    $(document).on('scroll', function () {
      console.log('iwork')
      var bodyHeight = $('body')[0].scrollHeight
      var windowHeight = $(window).height();
      var scrollTop = $(this).scrollTop()
          offsetY = scrollTop/(bodyHeight - windowHeight) * 100 + '%'
          console.log(offsetY)
            if (state === 'mobile'){
              if($('body').hasClass('bookMode')){
                $('.nav-item.selected.book .progress').css({ 'width': offsetY });
              }
              else if($('body').hasClass('aboutMode')){
                console.log(offsetY);
              }
              else if($('body').hasClass('cartMode')){
                $('.nav-item.selected.cart .progress').css({ 'width': offsetY });
              }else{
                $('.nav-item.selected.posterNav .progress').css({ 'width': offsetY });
              }
            }

    });


});
