jQuery(document).ready(function() {
    
});

function scroll(element) {
        var target = jQuery('.map');
        if (target.length)
        {
            var top = target.offset().top;
            jQuery('html,body').animate({scrollTop: top}, 1000);
            return false;
        }
}