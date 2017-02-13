jQuery(document).ready(function(){
    jQuery('.map .close').on('click',function(){
        jQuery('.map').css('display' , 'none');
    });
    
    jQuery('#toggleMaps').on('click' , function() { 
        jQuery('.map').css('display' , 'block');
        jQuery('iframe').css('width' , '100%');
        jQuery('iframe').css('height' , '350px');
    });
});