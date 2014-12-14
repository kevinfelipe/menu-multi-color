/*
* jQuery Menu Multi Color v0.1
* http://kevinfelipe.com.br
* 
* Copyright 2014, Genya 
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function($){
	$.fn.menuMultiColor = function(options){
		var defaults = {
			//tribute to Stryper yehhh lets rock <https://www.youtube.com/watch?v=O7ecl6Hm0Mk>
			colors: ["#000000","#FCB414"]
		}
		var settings = $.extend({},defaults,options);
		var j=0,i=0;
		var cores = settings.colors;
		var totalcores = cores.length-1;		
		
		return this.each(function(){			
			multicolor = $(this).attr('multicolor',i);

			multicolor.css('border-left','8px solid '+cores[j]);

            totalcores == j ?  j = 0 : j++;
			i++;
		});
	};
})(jQuery);