/**
*	Beta Utils Class
*/

var BetaUtils = {
	setMap : function(selector, options) {

		if(typeof selector == "undefined") return;

		var lat  = options.latitude || 40.722803;
		var long = options.longitude || -74.00882;
		var zoom = options.zoom || 8;
		var content = options.content || "";
		var title = options.title || "";

		var myLatlng = new google.maps.LatLng(lat,long);
		var mapOptions = {
			zoom: zoom,
			center: myLatlng,
			scrollwheel: false,
		};

		var map = new google.maps.Map(selector, mapOptions);
		var infowindow = new google.maps.InfoWindow({
		  content: content
		});

		var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: title
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}
}