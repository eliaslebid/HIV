// import $ from 'jquery';
// import validate from 'jquery-validation';
// import mask from 'jquery-mask-plugin';
//
// export default function formValidate() {
// 	const validateErrorPlacement = function (error, element) {
// 		error.addClass('ui-input__validation');
// 		error.appendTo(element.parent("div"));
// 	};
// 	const validateHighlight = function (element) {
// 		$(element).parent('div').addClass("has-error");
// 		$btn.addClass('has-error');
// 	};
// 	const validateUnhighlight = function (element) {
// 		$(element).parent('div').removeClass("has-error");
// 	};
// 	const validateSubmitHandler = function (form) {
// 		$(form).addClass('loading');
// 		$.ajax({
// 			type: "POST",
// 			url: $(form).attr('action'),
// 			data: $(form).serialize(),
// 			success: function (response) {
// 				$(form).removeClass('loading');
// 				const data = $.parseJSON(response);
// 				if (data.status === 'success') {
// 					// do something I can't test
// 				} else {
// 					$(form).find('[data-error]').html(data.message).show();
// 				}
// 			}
// 		});
// 	};
//
// 	$('.js-registration-form').on('change', 'input', function(event) {
// 		validateForm('.js-registration-form');
// 	});
//
// 	const $btn = $('.form__cta');
//
// 	function validateForm(form) {
// 		let valid = $(form).validate().checkForm();
// 		if (valid) {
// 			$btn.prop('disabled', false);
// 			$btn.removeClass('form__cta--disabled');
// 		} else {
// 			$btn.prop('disabled', true);
// 			$btn.addClass('form__cta--disabled');
// 			$btn.after('label');
// 		}
// 	}
//
// 	$("input[type='tel']").mask("+380(00) 000-00-00", {placeholder: "+380(__) ___-__-__"});
//
// 	const validatePhone = {
// 		required: true,
// 		normalizer: function (value) {
// 			const PHONE_MASK = '+X (XXX) XXX-XXXX';
// 			if (!value || value === PHONE_MASK) {
// 				return value;
// 			} else {
// 				return value.replace(/[^\d]/g, '');
// 			}
// 		},
// 		minlength: 11,
// 		digits: true
// 	};
//
// 	////////
// 	// FORMS
//
//
// 	/////////////////////
// 	// REGISTRATION FORM
// 	////////////////////
// 	$(".js-registration-form").validate({
// 		errorPlacement: validateErrorPlacement,
// 		highlight: validateHighlight,
// 		unhighlight: validateUnhighlight,
// 		submitHandler: validateSubmitHandler,
// 		rules: {
// 			name: "required",
// 			surname: "required",
// 			patronymic: "required",
// 			region: "required",
// 			area: "required",
// 			locality: "required",
// 			street: "required",
// 			house_number: "required",
// 			appt_number: "required",
// 			postcode: "required",
// 			phone: validatePhone,
// 			submit: "required"
// 			// password: {
// 			// 	required: true,
// 			// 	minlength: 6,
// 			// }
// 			// phone: validatePhone
// 		},
// 		messages: {
// 			name: "Поле не может быть пустым",
// 			surname: "Поле не может быть пустым",
// 			patronymic: "Поле не может быть пустым",
// 			area: "Поле не может быть пустым",
// 			region: "Поле не может быть пустым",
// 			locality: "Поле не может быть пустым",
// 			street: "Поле не может быть пустым",
// 			house_number: "Поле не может быть пустым",
// 			appt_number: "Поле не может быть пустым",
// 			postcode: "Поле не может быть пустым",
// 			email: {
// 				required: "Поле не может быть пустым",
// 				email: "Email contains wrong format"
// 			},
// 			password: {
// 				required: "Поле не может быть пустым",
// 				email: "Password should be at leasts 6 characters"
// 			},
// 			phone: {
// 				required: "Поле не может быть пустым",
// 				minlength: "Type a valid phone"
// 			}
// 		}
// 	});
// }
