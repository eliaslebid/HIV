import $ from 'jquery';
// import Swal from 'sweetalert2'
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

export default function modals() {
	// Magnific Popup

	const $page = $('.page');

	$(document).ready(function () {
		if ($page.is('.form')) {
			$('.js-open-form-registery').magnificPopup({
				type: 'inline',
				fixedContentPos: true,
				fixedBgPos: true,
				overflowY: 'auto',
				closeBtnInside: true,
				preloader: false,
				midClick: true,
				removalDelay: 300,
				mainClass: 'popup-buble',
				callbacks: {
					open: function () {
						$('#close-btn').on('click', function (event) {
							event.preventDefault();
							$.magnificPopup.close();
						});
					}
				}
			});
		}

		function closeMfp() {
			$.magnificPopup.close();
		}
	});
}
