import '../../styles/components/listpages/listpages.styl';

const navs = document.querySelectorAll('button');
const body = document.querySelectorAll('body')[0];
const previewButtons = document.querySelectorAll('.pagelist__title');
const iframe = document.getElementById('preview');
const previewWrapper = document.getElementById('preview-wrapper');

function removeActive() {
	[].forEach.call(previewButtons, function (button) {
		button.classList.remove('is-active');
	});
}

function getScrollbarWidth() {
	const outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.width = '100px';
	outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
	document.body.appendChild(outer);
	const widthNoScroll = outer.offsetWidth;
	// force scrollbars
	outer.style.overflow = 'scroll';
	// add innerdiv
	const inner = document.createElement('div');
	inner.style.width = '100%';
	outer.appendChild(inner);
	const widthWithScroll = inner.offsetWidth;
	// remove divs
	outer.parentNode.removeChild(outer);
	return widthNoScroll - widthWithScroll;
}

const scrollbarwidth = getScrollbarWidth();

[].forEach.call(previewButtons, function (button) {
	button.addEventListener('click', function (event) {
		if (window.innerWidth < 780) {
			return;
		}
		event.preventDefault();
		removeActive();
		const el = event.currentTarget;
		el.classList.add('is-active');
		iframe.src = el.href;
	}, false);
});

let mode = 'mobile';

[].forEach.call(navs, function (nav) {
	nav.addEventListener('click', function (event) {
		event.preventDefault();
		mode = event.currentTarget.dataset.mode;
		iframe.style.width = parseInt(event.currentTarget.getAttribute('data-width')) + parseInt(scrollbarwidth) + 'px';
		body.setAttribute('data-mode', 'is-' + mode);
		[].forEach.call(navs, function (nav) {
			nav.classList.remove('is-active');
		});
		event.currentTarget.classList.add('is-active');
		setIframeWidth();
	}, false);

	function setIframeWidth() {
		// getting preview area width
		const pwidth = previewWrapper.offsetWidth;
		const pheight = previewWrapper.offsetHeight;
		// iframe width
		const iwidth = iframe.offsetWidth;
		const iheight = iframe.offsetHeight;
		let scaleV = pheight / iheight;
		let scaleH = pwidth / iwidth;
		if (mode === 'mobile') {
			iframe.style.transform = 'scale(' + 1 + ')';
			iframe.style.height = pheight + 'px';
			return;
		}
		if (scaleH > 1) {
			scaleH = 1;
		}
		iframe.style.transform = 'scale(' + scaleH + ')';
		iframe.style.height = pheight / scaleH + 'px';
		// console.log(pheight*(2 - scaleV) + 'px');
		const realheight = iframe.getBoundingClientRect().height;
		if (realheight > pheight) {
			iframe.style.transform = 'scale(' + scaleV + ')';
		}
	}

	setIframeWidth();
	// resize event
	window.addEventListener('resize', function () {
		setIframeWidth();
	});
});
