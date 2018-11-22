// requestAnimationFrame 兼容
requestAnimationFrame = window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| function(cb){return setTimeout(cb, 1000/60)};
cancelAnimationFrame = window.cancelAnimationFrame
	|| window.webkitCancelAnimationFrame
	|| window.mozCancelAnimationFrame
	|| window.msCancelAnimationFrame
	|| window.oCancelAnimationFrame
	|| clearTimeout;