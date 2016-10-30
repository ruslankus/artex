$(function() {
    //cleints courusell
    $(".slides").slick({

        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,


        responsive: [

            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2,
                    dots: true,
                }
            },


            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2,
                    dots: true,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2,
                    dots: true,
                }
            },

            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }



        ]


    });


    //recent news
    $('.carousel-inner').slick({
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [

            {
                breakpoint: 360,
                settings: {
                    infinite: false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },

            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },

            {
                breakpoint: 580,
                settings: {
                    infinite: false,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },

            {
                breakpoint: 760,
                settings: {
                    infinite: false,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },

            {
                breakpoint: 960,
                settings: {
                    infinite: false,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },

            {
                breakpoint: 1700,
                settings: {
                    infinite: false,
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]

    });

    $('.testimonials').slick({

        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [

            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    dots: true
                }
            },

            {
                breakpoint: 760,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },

            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },

            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]

    });


    $("#menu-button > a").on('touchstart click', function(e) {
        e.preventDefault();

        $("#menu-button").removeClass('up').removeClass('down');

        var $body = $( 'body' ),
            $page = $( '#main-wrapper' ),
            //$menu = $( '#top-section' ),

        /* Cross browser support for CSS "transition end" event */
        transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

        /* When the toggle menu link is clicked, animation starts */
        $body.addClass( 'animating' );

        /***
         * Determine the direction of the animation and
         * add the correct direction class depending
         * on whether the menu was already visible.
         */
        if ( $body.hasClass( 'menu-visible' ) ) {
            $body.addClass( 'right' );
        } else {
            $body.addClass( 'left' );
        }



        /***
         * When the animation (technically a CSS transition)
         * has finished, remove all animating classes and
         * either add or remove the "menu-visible" class
         * depending whether it was visible or not previously.
         */
        $page.on( transitionEnd, function() {
            $body
                .removeClass( 'animating left right' )
                .toggleClass( 'menu-visible' );

            $page.off( transitionEnd );
        } );


    });

     /*---------------  scrolling direction detection ------------------*/
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code
            $("#menu-button").removeClass("up").addClass('down');
            $("#top-section").removeClass("up").addClass('down');
            console.log('down');
        } else {
            // upscroll code
            $("#menu-button").removeClass("down").addClass('up');
            $("#top-section").removeClass("down").addClass('up');
            console.log('up');
        }
        lastScrollTop = st;
    });

});

/*
function getBlockHeight(block_name) {
    return  $(window).height();
}
*/
