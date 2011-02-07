(function($){ 
     $.fn.extend({  
         tabify: function() {
         
			function getHref(el){
				hash = $(el).find('a').attr('href');
				hash = hash.substring(0,hash.length-4);
				return hash;
			}
			
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
				
				$(this).find('li a').each(function(){
					$(this).attr('href',$(this).attr('href') + '-tab');
				});
				
				function handleHash(){
					
					if(location.hash && $(self).find('a[href=' + location.hash + ']').length > 0){				
						setActive($(self).find('a[href=' + location.hash + ']').parent());
					}
				}
				
				if(location.hash){
					handleHash();
				}
					
				setInterval(handleHash,100);
				
				$(this).find('li').each(function(){
					if($(this).hasClass('active')){
						$(getHref(this)).show();
					} else {
						$(getHref(this)).hide();
					}
				});
            }); 
        } 
    }); 
})(jQuery);