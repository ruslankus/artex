function getHeight(){return $(window).height()}$(function(){$(".slides").slick({centerMode:!0,centerPadding:"10px",slidesToShow:3,slidesToScroll:3,arrows:!1,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"10px",slidesToShow:2,dots:!0}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"10px",slidesToShow:2,dots:!0}},{breakpoint:360,settings:{arrows:!1,centerMode:!0,centerPadding:"10px",slidesToShow:1,slidesToScroll:1,dots:!0}}]}),$(".carousel-inner").slick({centerMode:!0,centerPadding:"10px",slidesToShow:3,slidesToScroll:3,arrows:!1,responsive:[{breakpoint:360,settings:{arrows:!1,centerMode:!0,centerPadding:"0px",slidesToShow:1,dots:!0}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"10px",slidesToShow:1,slidesToScroll:2,dots:!0}},{breakpoint:760,settings:{arrows:!1,centerMode:!0,centerPadding:"0px",slidesToShow:1,slidesToScroll:2,dots:!0}}]}),$("#menu-button > a").on("touchstart click",function(e){e.preventDefault(),console.log(this);var s=$("body"),o=$("#main-wrapper"),n=$("#top-section"),t="transitionend webkitTransitionEnd otransitionend MSTransitionEnd";s.addClass("animating"),s.hasClass("menu-visible")?s.addClass("right"):s.addClass("left"),o.on(t,function(){s.removeClass("animating left right").toggleClass("menu-visible"),o.off(t)})})});