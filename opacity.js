$( document ).ready(function() {
console.log('hello there');
var header = $('.home');
var home = $('.home');
var range = 50;
var range2 = 100;

$('#lazy-container').on('scroll', function () {
  if (state === 'mobile'){
  }else{
    console.log('this works');
    var scrollTop = $(this).scrollTop(),
        height = header.height(),
        offset = height,
        calc = 1 - (scrollTop - offset + range) / range;
        calc2 = 1 - (scrollTop - offset*2 + range2) / range2;

    home.css({ 'opacity': calc });
    $('.bookIntro h3').css({ 'opacity': calc2 });

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
  }
});
});
