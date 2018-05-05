import $ from 'jquery'
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Russian } from 'flatpickr/dist/l10n/ru'

export default function datePicker() {
	$(".admin__picker").flatpickr({
		mode: "range",
		locale: Russian,
	});
}
