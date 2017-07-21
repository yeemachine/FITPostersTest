$( document ).ready(function() {
console.log('hello there');
var header = $('.home');
var header2 = $('.intro');
var home = $('.home');
var range = 50;
var range2 = 100;
var range3 = 500;


$('#lazy-container').on('scroll', function () {
  if (state === 'mobile'){
  }else{
    var scrollTop = $(this).scrollTop(),
        scrollLeft = $(this).scrollLeft(),
        height = header.height(),
        paddingHeight = $(window).height()*.05,
        paddingHeight2 = $(window).height()*.1,

        height2 = header2.width(),
        offset = height*2,
        offset2 = height2*.75,

        offsetA = $('.page3 .bookIntro:nth-child(1) h3 div:nth-child(1)').outerHeight()
        offsetX1 = $('.page4 .bookIntro:nth-child(1) h3 div:nth-child(1)').outerHeight() - paddingHeight2
        offsetX2 = offsetX1 + $('.page4 .bookIntro:nth-child(1) h3 div:nth-child(2)').outerHeight() + paddingHeight2 *2
        offsetX3 = offsetX2 + $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(1)').outerHeight()
        offsetX4 = offsetX3 + $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(2)').outerHeight()
        offsetX5 = offsetX4 + $('.page4 .bookIntro:nth-child(3) h3 div:nth-child(1)').outerHeight()


        calc = -(scrollTop - offset)/ offset;
        calc2 =  -(scrollTop - offset)/ offset;
        calc2a =  -(scrollTop - offset - offsetA)/ offset;

        calc3 = -(scrollLeft - offset2) / offset2;

        calc4 = -(scrollTop - offset - offsetX1) / offset;
        calc5 = -(scrollTop - offset - offsetX2) / offset;
        calc6 = -(scrollTop - offset - offsetX3) / offset;

        calc7 = -(scrollTop - offset - offsetX4) / offset;
        calc8 = -(scrollTop - offset - offsetX5) / offset;



        console.log(calc4);
        home.css({ 'opacity': calc });
        $('.page3 .bookIntro h3 div:nth-child(1)').css({ 'opacity': calc2 });
        $('.page3 .bookIntro h3 div:nth-child(2)').css({ 'opacity': calc2a });

        // $('.page4 .bookIntro:nth-child(1) h3 div:nth-child(1)').css({ 'opacity': calc2 });
        // $('.page4 .bookIntro:nth-child(1) h3 div:nth-child(2)').css({ 'opacity': calc4 });
        // $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(1)').css({ 'opacity': calc5 });
        // $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(2)').css({ 'opacity': calc6 });
        // $('.page4 .bookIntro:nth-child(3) h3 div:nth-child(1)').css({ 'opacity': calc7 });
        // $('.page4 .bookIntro:nth-child(3) h3 div:nth-child(2)').css({ 'opacity': calc8 });



        $('.intro').css({ 'opacity': calc3 });

        if (calc > '1') {
          home.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
          home.css({ 'opacity': 0 });
        }
        // if (calc2 > '1') {
        //     $('.page3 .bookIntro h3 div:nth-child(1), .page4 .bookIntro:nth-child(1) h3 div:nth-child(1)').css({ 'opacity': 1 });
        // } else if ( calc2 < '0' ) {
        //     $('.page3 .bookIntro h3 div:nth-child(1), .page4 .bookIntro:nth-child(1) h3 div:nth-child(1)').css({ 'opacity': 0 });
        // }
        // if (calc3 > '1') {
        //     $('.intro').css({ 'opacity': 1 });
        // } else if ( calc3 < '0' ) {
        //     $('.intro').css({ 'opacity': 0 });
        // }
        // if (calc4 > '1') {
        //     $('.page4 .bookIntro:nth-child(1) h3 div:nth-child(2)').css({ 'opacity': 1 });
        // } else if ( calc4 < '0' ) {
        //     $('.page4 .bookIntro:nth-child(1) h3 div:nth-child(2)').css({ 'opacity': 0 });
        // }
        // if (calc5 > '1') {
        //     $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(1)').css({ 'opacity': 1 });
        // } else if ( calc5 < '0' ) {
        //     $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(1)').css({ 'opacity': 0 });
        // }
        // if (calc6 > '1') {
        //     $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(2)').css({ 'opacity': 1 });
        // } else if ( calc6 < '0' ) {
        //     $('.page4 .bookIntro:nth-child(2) h3 div:nth-child(2)').css({ 'opacity': 0 });
        // }
      }
});
});
