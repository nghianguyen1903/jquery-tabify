(function($){ 
     $.fn.extend({  
         tabify: function() {
			return this.each(function() { 		
				$(this).find('li').each(function(){
					if($(this).hasClass('active'))
						$(getHref(this)).show();
					else
						$(getHref(this)).hide();	
					$(this).click(function(){
						$(this).parent().find('li').each(function(){
							$(this).removeClass('active');
							$(getHref(this)).hide();
						});
						$(getHref(this)).show();
						$(this).addClass('active');
					});
				});
				function getHref(el){ return $(el).find('a').attr('href'); }
            }); 
        } 
    }); 
})(jQuery);