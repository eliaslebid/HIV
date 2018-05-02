import $ from 'jquery';
import 'slick-carousel';

export default function sliders() {
	function initSliders(){
		const slickNextArrow = '<div class="slick-prev"><svg class="ico ico-back-arrow"><use xlink:href="img/sprite.svg#ico-back-arrow"></use></svg></div>';
		const slickPrevArrow = '<div class="slick-next"><svg class="ico ico-next-arrow"><use xlink:href="img/sprite.svg#ico-next-arrow"></use></svg></div>'

		// General purpose sliders
		$('[js-slider]').each(function(i, slider){
			let self = $(slider);

			// set data attributes on slick instance to control
			if (self && self !== undefined) {
				self.slick({
					autoplay: self.data('slick-autoplay') !== undefined,
					dots: self.data('slick-dots') !== undefined,
					arrows: self.data('slick-arrows') !== undefined,
					prevArrow: slickNextArrow,
					nextArrow: slickPrevArrow,
					infinite: self.data('slick-infinite') !== undefined ? true : true,
					speed: 300,
					slidesToShow: 1,
					accessibility: false,
					adaptiveHeight: true,
					draggable: self.data('slick-no-controls') === undefined,
					swipe: self.data('slick-no-controls') === undefined,
					swipeToSlide: self.data('slick-no-controls') === undefined,
					touchMove: self.data('slick-no-controls') === undefined,
				});
			}

		});

		// other individual sliders goes here
		$('[js-myCustomSlider]').slick({

		})

	}
}
