$(document).ready(function() {
    $(".navbar").show();
    $(window).resize(function() {
        if ($(window).width() <= 640) {
            $(".navbar").hide();
        }
    });

    $(".toggle-icon").click(function() {
        $(".navbar").slideToggle("slow", function() {
            // Animation complete.
        });
    }); // End of Menu



    // Accordion

    //Add Inactive Class To All Accordion Headers
    $('.accordion-title').toggleClass('inactive-title');
    //Set The Accordion Content Width
    var contentWidth = $('.accordion-title').width('auto');
    $('.accordion-content').css({ 'width': contentWidth });

    //Open The First Accordion Section When Page Loads
    $('.accordion-title').first().toggleClass('active-title').toggleClass('inactive-title');
    $('.accordion-content').first().slideDown().toggleClass('open-content');

    // The Accordion Effect
    $('.accordion-title').click(function() {
        if ($(this).is('.inactive-title')) {
            $('.active-title').toggleClass('active-title').toggleClass('inactive-title').next().slideToggle().toggleClass('open-content');
            $(this).toggleClass('active-title').toggleClass('inactive-title');
            $(this).next().slideToggle().toggleClass('open-content');
        } else {
            $(this).toggleClass('active-title').toggleClass('inactive-title');
            $(this).next().slideToggle().toggleClass('open-content');
        }
        return false;
    }); // End of Accordion

    // Start of back to top script
    var offset = 220;
    var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    }); // End of back to top script
});