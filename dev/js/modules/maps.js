/* eslint-disable no-undef */
import $ from 'jquery';

export default function initMap() {
	$.getJSON('./util/style.json', data => {
		doInitMap(data);
	});

	function doInitMap(styles) {
		if ($(document).find('#map').length) {
			const locations = [
				{
					$btn: $('#officeLocation'),
					location: {lat: 50.364, lng: 30.553},
					markerImage: './img/google-label.svg'
				}
			];
			const mapOptions = {
				zoom: 13,
				center: locations[0].location,
				animation: google.maps.Animation.DROP,
				styles: styles
			};
			const map = new google.maps.Map(document.getElementById('map'), mapOptions);
			map.markers = [];

			function deleteMarker(index) {
				map.markers[index].setMap(null);
				map.markers[index] = null;
				map.markers.splice(index, 1);
			}

			function placeMarker(location, image) {
				let marker;

				if ( marker ) {
					marker.setPosition(location);
				} else {
					marker = new google.maps.Marker({
						position: location,
						animation: google.maps.Animation.DROP,
						map: map,
						icon: image
					});
				}

				let index = map.markers.length;

				map.markers.push(marker);

				marker.addListener('click', toggleBounce);
			}

			function toggleBounce() {
				if (marker.getAnimation() !== null) {
					marker.setAnimation(null);
				} else {
					marker.setAnimation(google.maps.Animation.BOUNCE);
				}
			}

			placeMarker(locations[0].location, locations[0].markerImage);
		}
	}
}

