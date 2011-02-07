(function($){$.fn.extend({tabify:function(){function getHref(el){return $(el).find("a").attr("href");}
function setActive(el){$(el).addClass("active");$(getHref(el)).show();$(el).siblings("li").each(function(){$(this).removeClass("active");$(getHref(this)).hide();});}
return this.each(function(){var _4=this;function handleHash(){if(location.hash){setActive($(_4).find("a[href="+location.hash+"]").parent());}}
if(location.hash){handleHash();}
setInterval(handleHash,100);$(this).find("li").each(function(){if($(this).hasClass("active")){$(getHref(this)).show();}else{$(getHref(this)).hide();}});});}});})(jQuery);