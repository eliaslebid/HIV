import $ from 'jquery';
// import Swal from 'sweetalert2'
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

export default function modals() {
	// Magnific Popup

	$(document).ready(function() {
		$('.form .open-popup-link').magnificPopup({
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

		function closeMfp(){
			$.magnificPopup.close();
		}
	});


	// const htmlContent = `
	// 	<div class="modal">
	// 		<div class="modal__top">
	// 			<div class="modal__success-text">Заказ успешно<br>оформлен</div>
	// 			<div class="modal__additional-inf-wrapper">
	// 				<p class="modal__id-number-text">Идентификационный номер вашего заказа:</p>
	// 				<div class="modal__id">34578230756397</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// `;
    //
	// $('.form__cta').on('click', function () {
	// 	Swal({
	// 		type: 'success',
	// 		title: '',
	// 		html: htmlContent,
	// 		showConfirmButton: true,
	// 		timer: 231500
	// 	})
	// });
}
