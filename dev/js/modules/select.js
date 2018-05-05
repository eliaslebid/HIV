import selectize from 'selectize';
import 'selectize/dist/css/selectize.default.css'

export default function select() {
	$('#js-region-select').selectize({
		create: false,
		sortField: 'text'
	});

	$('#js-area-select').selectize({
		create: false,
		sortField: 'text'
	});

	$('#js-locality-select').selectize({
		create: false,
		sortField: 'text'
	});

	$('#js-status-select').selectize({
		create: false,
		sortField: 'text'
	});
}
