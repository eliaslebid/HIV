import $ from 'jquery';
import { throttle } from '../vendor/debounce';

export default function toggles() {
	$(document)
		.on('click', '[href="#"]', function (e) {
			e.preventDefault();
		})
		.on('click', 'a[href^="#"]', function () { // section scroll
			const el = $(this).attr('href');
			$('body, html').animate({
				scrollTop: $(el).offset().top
			}, 1000);
			return false;
		});

	$(document).on('click', '.hamburger--squeeze', function () {
		$('html, body').toggleClass('overflow--hidden');
		$(this).toggleClass('is-active');
		$('.mobile-navi').toggleClass('is-active');
		$('.header__logo').toggleClass('header__logo--fade');
	});

	function closeMobileMenu() {
		$('.hamburger--squeeze').removeClass('is-active');
		$('.mobile-navi').removeClass('is-active');
		$('html, body').removeClass('overflow--hidden');
		$('.header__logo').removeClass('header__logo--fade');
	}

	const $mobileHref = $('.mobile-navi__menu').find('a');

	$mobileHref.on('click', function () {
		closeMobileMenu();
	});

	$('.header__language').hover(function () {
		$('.header__language-dropdown').addClass('is-active');
		$(this).addClass('is-active');
	}, function () {
		$('.header__language-dropdown').removeClass('is-active');
		$(this).removeClass('is-active');
	});

	$('.accordion__title').on('click', function () {
		$(this).toggleClass('active');
		$(this).next().slideToggle();
	})
}
