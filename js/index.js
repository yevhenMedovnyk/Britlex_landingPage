const burgerBtn = document.querySelector('.header__burger');
const menuHeader = document.querySelector('.header__menu');
const headerBtn = document.querySelector('.header__button');
const bodyLocker = document.querySelector('body');

burgerBtn.addEventListener('click', function () {
	menuHeader.classList.toggle('_open');
	headerBtn.classList.toggle('_active');
	bodyLocker.classList.toggle('_lock');
})

document.addEventListener('click', function (e) {

	const menuCloseBody = e.composedPath().includes(burgerBtn);
	const menuCloseBodyPlusMenu = e.composedPath().includes(menuHeader);

	if (!menuCloseBody && !menuCloseBodyPlusMenu) {
		menuHeader.classList.remove('_open');
		headerBtn.classList.remove('_active');
		bodyLocker.classList.remove('_lock');
	}
})