$(document).ready(function(){
	$('.menu').click(function(){
		$('.links-wrapper').toggleClass('active');
	});
	$('section').click(function(){
		console.log('i was clicked');
		if($( ".links-wrapper" ).hasClass( "active" )) {
			console.log('true');
			$('.links-wrapper').removeClass('active')
		}
	});

})