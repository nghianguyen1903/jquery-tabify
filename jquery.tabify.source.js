(function($){ 
     $.fn.extend({  
         tabify: function() {
			function getHref(el){return $(el).find('a').attr('href');}
		 	function setActive(el){
				$(el).addClass('active');
				$(getHref(el)).show();
				$(el).siblings('li').each(function(){
					$(this).removeClass('active');
					$(getHref(this)).hide();
				});
			}
			return this.each(function() {
				var self = this;
				function handleHash(){
					if(location.hash)
						setActive($(self).find('a[href=' + location.hash + ']').parent());
				}
				if(location.hash)
					handleHash();
				setInterval(handleHash,100);
				$(this).find('li').each(function(){
					if($(this).hasClass('active'))
						$(getHref(this)).show();
					else
						$(getHref(this)).hide();
				});
            }); 
        } 
    }); 
})(jQuery);