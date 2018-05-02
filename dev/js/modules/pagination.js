import $ from 'jquery';

export default function pagination() {

	function onScroll(e) {
		const scrollPos = $(document).scrollTop();
		const $sections = $('.page-navigator__wrapper');
		$sections.each(function () {
			const currLink = $(this).find('a');
			const refElement = $(currLink.attr('href'));
			const currentNum = $(this).find('.page-navigator__current-number');

			if ($sections.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.page-navigator__section').removeClass('active');
				currLink.addClass('page-navigator__section--active');
				currentNum.addClass('page-navigator__current-number--active');
			}
			else {
				currLink.removeClass('page-navigator__section--active');
				currentNum.removeClass('page-navigator__current-number--active');
			}

		});
	}

	$(document).on('scroll', onScroll);
}
