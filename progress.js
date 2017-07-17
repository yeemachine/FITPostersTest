$( document ).ready(function() {
  var lastScrollTop = 0;
  var lastScrollLeft = 0;

  $('#lazy-container').on('scroll', function () {
    var lazyHeight = $('#lazy-container')[0].scrollHeight
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var lazyWidth = $('#lazy-container')[0].scrollWidth
    var scrollTop = $(this).scrollTop()
    var scrollLeft = $(this).scrollLeft()

        offsetY = scrollTop/(lazyHeight - windowHeight) * 100
        offsetX = scrollLeft/(lazyWidth - windowWidth) * 100



    if (state === 'mobile'){
    }else{
      if($('body').hasClass('bookMode')){
        $('.nav-item.selected.book .progress').css({ 'width': offsetY + '%' });
        if (offsetY > 99){
          $('.posterNav').addClass('preview')
        }else{
          $('.posterNav').removeClass('preview')
        }

      }
      else if($('body').hasClass('aboutMode')){
        $('.nav-item.selected.about .progress').css({ 'width': offsetY + '%' });
        if (offsetY > 99){
          $('.cart').addClass('preview')
        }else{
          $('.cart').removeClass('preview')
        }
      }
      else if($('body').hasClass('cartMode')){
        $('.nav-item.selected.cart .progress').css({ 'width': offsetY + '%'});

      }else{
        $('.nav-item.selected.posterNav .progress').css({ 'width': offsetX + '%'});
        if (offsetX > 99){
          $('.about').addClass('preview')
        }else{
          $('.about').removeClass('preview')
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
