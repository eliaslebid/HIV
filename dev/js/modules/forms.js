import $ from 'jquery';

export default function forms() {
	// FLOATING LABELS
	// focus in
	$(document).on('focus', '.contacts__form-field', function () {
		$(this).addClass('is-focused');
	});

	$(document).on('focus', '.modal__form-field', function () {
		$(this).addClass('is-focused');
	});

	// focus out
	$(document).on('blur', '.contacts__form-field', function (e) {
		let thisVal = $(this).find('input, textarea').val();

		if (thisVal !== '') {
			$(this).removeClass('is-focused');
			$(this).find('.label-title').addClass('label--unvisible');
		} else {
			$(this).removeClass('is-focused');
		}
	});

	// focus out
	$(document).on('blur', '.modal__form-field', function (e) {
		let thisVal = $(this).find('input, textarea').val();

		if (thisVal !== '') {
			$(this).removeClass('is-focused');
			$(this).find('.label-title').addClass('label--unvisible');
		} else {
			$(this).removeClass('is-focused');
		}
	});

	// textarea autoExpand
	$(document)
		.one('focus.autoExpand', '.js-autoExpand', function () {
			let savedValue = this.value;
			this.value = '';
			this.baseScrollHeight = this.scrollHeight;
			this.value = savedValue;
		})
		.on('input.autoExpand', '.js-autoExpand', function () {
			let minRows = this.getAttribute('data-min-rows') | 0, rows;
			this.rows = minRows;
			rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
			this.rows = minRows + rows;
		});
}
