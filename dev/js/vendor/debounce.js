const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
	return typeof obj;
} : function (obj) {
	return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};

function isObject(value) {
	const type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	return value !== null && (type === 'object' || type === 'function');
}

function debounce(func, wait, options) {
	let lastArgs = void 0,
		lastThis = void 0,
		maxWait = void 0,
		result = void 0,
		timerId = void 0,
		lastCallTime = void 0;

	let lastInvokeTime = 0;
	let leading = false;
	let maxing = false;
	let trailing = true;

	if (typeof func !== 'function') {
		throw new TypeError('Expected a function');
	}
	wait = +wait || 0;
	if (isObject(options)) {
		leading = !!options.leading;
		maxing = 'maxWait' in options;
		maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
		trailing = 'trailing' in options ? !!options.trailing : trailing;
	}

	function invokeFunc(time) {
		let args = lastArgs;
		let thisArg = lastThis;

		lastArgs = lastThis = undefined;
		lastInvokeTime = time;
		result = func.apply(thisArg, args);
		return result;
	}

	function leadingEdge(time) {
		// Reset any `maxWait` timer.
		lastInvokeTime = time;
		// Start the timer for the trailing edge.
		timerId = setTimeout(timerExpired, wait);
		// Invoke the leading edge.
		return leading ? invokeFunc(time) : result;
	}

	function remainingWait(time) {
		const timeSinceLastCall = time - lastCallTime;
		const timeSinceLastInvoke = time - lastInvokeTime;
		const timeWaiting = wait - timeSinceLastCall;

		return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
	}

	function shouldInvoke(time) {
		const timeSinceLastCall = time - lastCallTime;
		const timeSinceLastInvoke = time - lastInvokeTime;

		// Either this is the first call, activity has stopped and we're at the
		// trailing edge, the system time has gone backwards and we're treating
		// it as the trailing edge, or we've hit the `maxWait` limit.
		return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
	}

	function timerExpired() {
		const time = Date.now();
		if (shouldInvoke(time)) {
			return trailingEdge(time);
		}
		// Restart the timer.
		timerId = setTimeout(timerExpired, remainingWait(time));
	}

	function trailingEdge(time) {
		timerId = undefined;

		// Only invoke if we have `lastArgs` which means `func` has been
		// debounced at least once.
		if (trailing && lastArgs) {
			return invokeFunc(time);
		}
		lastArgs = lastThis = undefined;
		return result;
	}

	function cancel() {
		if (timerId !== undefined) {
			clearTimeout(timerId);
		}
		lastInvokeTime = 0;
		lastArgs = lastCallTime = lastThis = timerId = undefined;
	}

	function flush() {
		return timerId === undefined ? result : trailingEdge(Date.now());
	}

	function pending() {
		return timerId !== undefined;
	}

	function debounced() {
		const time = Date.now();
		const isInvoking = shouldInvoke(time);

		for (let _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		lastArgs = args;
		lastThis = this;
		lastCallTime = time;

		if (isInvoking) {
			if (timerId === undefined) {
				return leadingEdge(lastCallTime);
			}
			if (maxing) {
				// Handle invocations in a tight loop.
				timerId = setTimeout(timerExpired, wait);
				return invokeFunc(lastCallTime);
			}
		}
		if (timerId === undefined) {
			timerId = setTimeout(timerExpired, wait);
		}
		return result;
	}

	debounced.cancel = cancel;
	debounced.flush = flush;
	debounced.pending = pending;
	return debounced;
}

export function throttle(func, wait, options) {
	let leading = true;
	let trailing = true;

	if (typeof func !== 'function') {
		throw new TypeError('Expected a function');
	}
	if (isObject(options)) {
		leading = 'leading' in options ? !!options.leading : leading;
		trailing = 'trailing' in options ? !!options.trailing : trailing;
	}
	return debounce(func, wait, {
		'leading': leading,
		'maxWait': wait,
		'trailing': trailing
	});
}
