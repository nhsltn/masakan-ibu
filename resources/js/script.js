$(document).ready(function() {
   
//    For Sticky Navbar
    $('.js--features-section').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    } );

    $('.js--features-section').waypoint(function (direction) {
        if (direction == "down") {
            $('.fa-bars').addClass('black');
        } else {
            $('.fa-bars').removeClass('black');
        }
    }, {
        offset: '60px'
    });
   
// Scoll On Javascript
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--pricing-section').offset().top}, 500)
    });
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.features-section').offset().top}, 500)
    });


// Navbar Smooth

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


})