$(document).ready(function() {
	
	$('.scrape').on('click', function(event) {
		$.ajax({
			method: 'GET',
	    	url: '/scrape'
	  	}).done(function(response) {
	    	console.log('\n\n\n*****\n',response,'\n***');
	    	
	    });
	});

	$('.save').on('click', function(event) {
		var condition = {
			id: $(this).data('id')
		}
		$.ajax({
			method: 'PUT',
			data: condition,
			url: '/article'
		}).done(function(response) {
			alert('Article saved.')
			location.reload();
			// code to show modal here that article successfully saved..
		})
	})

		$('.delete').on('click', function(event) {
		var condition = {
			id: $(this).data('id')
		}
		$.ajax({
			method: 'DELETE',
			data: condition,
			url: '/article'
		}).done(function(response) {
			alert('Article removed.')
			location.reload();
			// code to show modal here that article successfully saved..
		})
	})


})