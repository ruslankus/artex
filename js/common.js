$(function() {

    $(".slides").slick({

        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,


        responsive: [

            {
                breakpoint: 768,
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


    $('.carousel-inner').slick({

        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
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
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: true,
                }
            },

            {
                breakpoint: 760,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
        ]

    });


    $("#menu-button > a").on('touchstart click', function(e) {
        e.preventDefault();

        console.log(this);

        var $body = $( 'body' ),
            $page = $( '#main-wrapper' ),
            $menu = $( '#top-section' ),

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



});


function getHeight() {
    return  $(window).height();
}