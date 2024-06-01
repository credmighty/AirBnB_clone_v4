#store id of checked amenities
let amenities = {};

#Listen for changes on each input checkbox tag
$('input[type="checkbox"]').change(function () {
	#get the data id
	let amenityId = $(this).attr('data-id');
	#if the checkbox is checked or unchecked
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
	gettype
