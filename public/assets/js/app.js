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

	$('.save').on('click', function(event) {
		var condition = {
			id: $(this).data('id')
		}
		$.ajax({
			method: 'PUT',
			data: condition,
			url: '/save'
		}).done(function(response) {
			alert('Saved...')
			// code to show modal here that article successfully saved..
		})
	})


})