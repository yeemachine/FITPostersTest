$( document ).ready(function() {
console.log('hello there');
var header = $('.home');
var home = $('.home');
var range = 50;

$('#lazy-container').on('scroll', function () {
  console.log('this works');
  var scrollTop = $(this).scrollTop(),
      height = header.height(),
      offset = height,
      calc = 1 - (scrollTop - offset + range) / range;

  home.css({ 'opacity': calc });

  if (calc > '1') {
    home.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    home.css({ 'opacity': 0 });
  }

});
});
