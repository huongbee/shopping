$(document).ready(function() {
	/* ================ VERFIFY IF USER IS ON TOUCH DEVICE ================ */
    
    if(is_touch_device()){
        $(".portfolio-image").on('click', function(e){					
            $(this).find('.portfolio-hover').show();
        });
    }
    
    // function to check is user is on touch device
    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers 
        || 'onmsgesturechange' in window; // works on ie10
    }

    /* ================ PORTFOLIO ISOTOPE FILTER ================ */

    (function() {
        //ISOTOPE
        // cache container
        var $portfolioitems = $('#portfolioitems');
        // initialize isotope
        $portfolioitems.isotope({
            filter: '*',
            masonry: {
                columnWidth: 1,
                isResizable: true
            }
        });

        // filter items when filter link is clicked
        $('#filters a').click(function() {
            $('#filters li').removeClass('active');
            var selector = $(this).closest('li').addClass('active').end().attr('data-filter');
            $portfolioitems.isotope({
                filter: selector
            });
            return false;
        });
    })();
});
