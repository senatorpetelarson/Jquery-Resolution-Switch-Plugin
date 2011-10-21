/*
 * resolutionSwitch 1.0.0
 * -----------------
 * Switches to a high resolution image once it has been loaded.
 * http://www.jiffymedia.com/
 *
 *
 * Copyright (c) 2011 Jiffy Media
 * Licensed under the MIT licenses.
 *
 */

;(function($) {
	// Custom selector to find `img` elements that have a valid `src` attribute and have not already loaded.
    $.expr[':'].uncached = function(obj) {
        return $(obj).is('img[src!=""]') && ! obj.complete; 
    };
    
    $.expr[':'].cached = function(obj) {
        return $(obj).is('img[src!=""]') && obj.complete; 
    };
    
    $.fn.extend({
        resolutionSwitch: function(opts) {
        	var options = {
	    		highresImageExtension:'_high',
	        	useFade:true,
	        	fadeDuration:100 }
	
	        // Handle options object.
	        if ($.isPlainObject(opts)) {
	            $.each(opts,function(index,value) {
	            	if(options[index]) options[index] = value;
	            });
	        }
	        
        	return this.each(function() {
        		var image = $("<img>");
				image.attr("src",this.src.replace("."+(this.src.substr((this.src.length-3),3)),options['highresImageExtension']+"."+(this.src.substr((this.src.length-3),3))));
				$(this).data("highResSrc",this.src.replace("."+(this.src.substr((this.src.length-3),3)),options['highresImageExtension']+"."+(this.src.substr((this.src.length-3),3))));
				$(this).load(function(evt) {
					//console.log("original image loaded");
				});
				if(! $("#cached-images")) {
					console.log("adding element");
					$('body').append("<div id='cached-images'></div>");
				}
				image.data("associated_image",$(this));
				image.load(function() {
					console.log("high-res image loaded");
					$(this).data("associated_image").attr("src",$(this).attr("src"));
				});
				$("#cached-images").append(image);
        	});
        }
    });
})(jQuery);