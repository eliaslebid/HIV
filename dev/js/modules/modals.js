import $ from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

export default function modals() {
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		mainClass: 'popup-buble',
		removalDelay: 300,
		callbacks: {
			open: function () {
				$('#close-btn').on('click', function (event) {
					event.preventDefault();
					$.magnificPopup.close();
				});
			}
		}
	});

	function closeMfp() {
		$.magnificPopup.close();
	}
}
