let body = document.querySelector('body');

document.getElementById('menu').addEventListener('click', openMenu);
document.querySelector('#close').addEventListener('click', closeMenu)

function openMenu(event) {
	document.getElementById('parent-menu').classList.add('active');
	bodyClass();
}

function closeMenu(event) {
	this.parentNode.parentNode.classList.remove('active');
	bodyClass();
}

function bodyClass() {
	if (body.classList.contains('openMenu')) {
		body.classList.remove('openMenu');
	} else {
		body.classList.add('openMenu');
	}
}

(function () {
    $('.selectpicker').selectpicker();
})();