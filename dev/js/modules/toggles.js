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

	// $(window).on('scroll', throttle(function () {
	// 	let vScroll = $(window).scrollTop();
	// 	let header = $('.header').not('.header--static');
	// 	let headerHeight = header.height();
	// 	let firstSection = $(document).find('.page__content div:first-child').height() - headerHeight;
	// 	let visibleWhen = Math.round($(document).height() / $(window).height()) > 2.5;
    //
	// 	if (visibleWhen) {
	// 		if (vScroll > headerHeight) {
	// 			header.addClass('is-fixed');
	// 		} else {
	// 			header.removeClass('is-fixed');
	// 		}
	// 		if (vScroll > firstSection) {
	// 			header.addClass('is-fixed-visible');
	// 		} else {
	// 			header.removeClass('is-fixed-visible');
	// 		}
	// 	}
	// }, 10));

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
		$(this).next().slideToggle();
	})
}
