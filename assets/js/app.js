;(function($, window) {
	
	$(document).ready(function() {
		
		$('.menuicon').click(function(e) {
			
			var $t = $(this);
			var $nav = $('.nav');
			
			if ($t.hasClass('rotate')) {
				$t.removeClass('rotate');
				$nav.removeClass('show');
			}
			else {
				$t.addClass('rotate');
				$nav.addClass('show');
			}
			
			e.preventDefault();
		
		});
		
		$('.type-buttons button').click(function() {
			var $buttons = $('.type-buttons button');
			var $t = $(this);
			var type = $t.attr('id');
			
			$buttons.removeClass('primary');
			$t.addClass('primary');
		
			for ( x=1; x<=3; x++ ) {
				$('body').removeClass('type-'+x);
			}
			
			if ($('.nav').hasClass('show'))
			{
				$('.menuicon').removeClass('rotate')
				$('nav').removeClass('show');
			}
			
			$('body').addClass(type);
		});
	
	});
	
}(jQuery, this));