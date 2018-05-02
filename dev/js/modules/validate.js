import $ from 'jquery';
import validate from 'jquery-validation';

export default function formValidate() {
	const validateErrorPlacement = function(error, element) {
		error.addClass('ui-input__validation');
		error.appendTo(element.parent("div"));
	};
	const validateHighlight = function(element) {
		$(element).parent('div').addClass("has-error");
	};
	const validateUnhighlight = function(element) {
		$(element).parent('div').removeClass("has-error");
	};
	const validateSubmitHandler = function(form) {
		$(form).addClass('loading');
		$.ajax({
			type: "POST",
			url: $(form).attr('action'),
			data: $(form).serialize(),
			success: function(response) {
				$(form).removeClass('loading');
				const data = $.parseJSON(response);
				if (data.status === 'success') {
					// do something I can't test
				} else {
					$(form).find('[data-error]').html(data.message).show();
				}
			}
		});
	};

	const validatePhone = {
		required: true,
		normalizer: function(value) {
			const PHONE_MASK = '+X (XXX) XXX-XXXX';
			if (!value || value === PHONE_MASK) {
				return value;
			} else {
				return value.replace(/[^\d]/g, '');
			}
		},
		minlength: 11,
		digits: true
	};

	////////
	// FORMS


	/////////////////////
	// REGISTRATION FORM
	////////////////////
	$(".js-registration-form").validate({
		errorPlacement: validateErrorPlacement,
		highlight: validateHighlight,
		unhighlight: validateUnhighlight,
		submitHandler: validateSubmitHandler,
		rules: {
			last_name: "required",
			first_name: "required",
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 6,
			}
			// phone: validatePhone
		},
		messages: {
			last_name: "Fill this field",
			first_name: "Fill this field",
			email: {
				required: "Fill this field",
				email: "Email contains wrong format"
			},
			password: {
				required: "Fill this field",
				email: "Password should be at leasts 6 characters"
			},
			phone: {
			    required: "Fill this field",
			    minlength: "Type a valid phone"
			}
		}
	});
}
