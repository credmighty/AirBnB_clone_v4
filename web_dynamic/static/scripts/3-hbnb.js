//store id of checked amenities
let amenities = {};

//Listen for changes on each input checkbox tag
$('input[type="checkbox"]').change(function () {
	//get the data id
	let amenityId = $(this).attr('data-id');
	//if the checkbox is checked or unchecked
	if ($(this).is(':checked')) {
		amenities[amenityId] = true;
	} else {
		delete amenities[amenityId];
	}

	#update the h4 tag & id of checked amenities
	let amenitiesList = object.keys(amenities).join(', ');
	$('div.Amenities h4').text(amenitiesList);
});

$.ajax({
	url: 'http://0.0.0.0:5001/api/v1/status/',
	type: 'GET',
	dataType: 'json',
	success: function (json) {
		$('#api_status').addClass('available');
	},

	error: function (xhr, status) {
		console.log('error ' + status);
	}
});

$.ajax({
	url: 'http://0.0.0.0:5001/api/v1/places_search/',
	type: 'POST',
	Content-Type: 'application/json',
	data:{},
	dataType: 'json',
	success: function (json) {
		$.each(json, function (index, place) {
			let article = $('<article>');
			article.append('<h2>' + place.name + '</h2>');
