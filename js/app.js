jQuery(function() {
	//catch all clicks on a tags
	jQuery("a").click(function(){
		//check if it has a hash (i.e. if it's an anchor link)
		if(this.hash){
			var hash = this.hash.substr(1);
			var $toElement = jQuery("[id="+hash+"]");
			var toPosition = $toElement.position().top;
			//scroll to element
			jQuery("body,html").animate({
				scrollTop : toPosition
			},2000,"easeOutExpo")
		}
	});
	//do the same with urls with hash too (so on page load it will slide nicely)
	if(location.hash){
		var hash = location.hash;
		window.scroll(0,0);
		jQuery("a[href="+hash+").click();
	}
});