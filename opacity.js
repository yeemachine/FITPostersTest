$( document ).ready(function() {
console.log('hello there');
var header = $('.home');
var header2 = $('.intro');
var home = $('.home');
var range = 50;
var range2 = 100;
var range3 = 100;


$('#lazy-container').on('scroll', function () {
  if (state === 'mobile'){
  }else{
    console.log('this works');
    var scrollTop = $(this).scrollTop(),
        scrollLeft = $(this).scrollLeft(),
        height = header.height(),
        height2 = header2.width(),
        offset = height,
        offset2 = height2,
        calc = 1 - (scrollTop - offset + range) / range;
        calc2 = 1 - (scrollTop - offset*2 + range2) / range2;
        calc3 = 1 - (scrollLeft - offset2*.5 + range3) / range3;

    home.css({ 'opacity': calc });
    $('.bookIntro h3').css({ 'opacity': calc2 });
    $('.intro').css({ 'opacity': calc3 });

    if (calc > '1') {
      home.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      home.css({ 'opacity': 0 });
    }
    if (calc2 > '1') {
        $('.bookIntro h3').css({ 'opacity': 1 });
    } else if ( calc2 < '0' ) {
        $('.bookIntro h3').css({ 'opacity': 0 });
    }
    if (calc3 > '1') {
        $('.intro').css({ 'opacity': 1 });
    } else if ( calc3 < '0' ) {
        $('.intro').css({ 'opacity': 0 });
    }
  }
});
});
