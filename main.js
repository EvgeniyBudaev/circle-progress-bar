$('head style[type="text/css"]').attr('type', 'text/less');
// less.refreshStyles();
window.randomize = function() {
	$('.radial-progress').attr('data-progress',  70);
}
setTimeout(window.randomize, 200);
$('.radial-progress').click(window.randomize);

// const element = document.querySelector('.radial-progress')
// let elementAttr = element.dataset.progress
// console.log('element', element);
// console.log(elementAttr);

// setTimeout((elementAttr) => {
// }, 500)