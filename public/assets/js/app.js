$(document).ready(function() {
	
	$('.scrape').on('click', function(event) {
		$.ajax({
			method: 'GET',
	    	url: '/scrape'
	  	}).done(function(response) {
	    	console.log("scraped: " + response);
	    	location.reload();
	    });
	});


})