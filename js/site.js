$(document).ready(function(){

	$(".prc-service").click(function() {
		var ele = $(this).attr('id');
		console.log(ele);
    	$('html, body').animate({
        	scrollTop: $('#' + ele + '-content').position().top - 150
    	}, 400);
	});

	$(".prc-product").click(function() {
		var ele = $(this).attr('id');
		console.log(ele);
    	$('html, body').animate({
        	scrollTop: $('#' + ele + '-content').position().top - 150
    	}, 400);
	});

	$('.navbar-nav li').click(function(){
		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
	});
});


