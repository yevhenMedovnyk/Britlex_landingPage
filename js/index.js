const burgerBtn = document.querySelector('.header__burger');
const menuHeader = document.querySelector('.header__menu');
const headerBtn = document.querySelector('.header__button');

burgerBtn.addEventListener('click', function () {
	menuHeader.classList.toggle('-open');
	headerBtn.classList.toggle('-active');
})

document.addEventListener('click', function (e) {
	
	const menuCloseBody = e.composedPath().includes(burgerBtn);
	const menuCloseBodyPlusMenu = e.composedPath().includes(menuHeader);
	console.log(e.composedPath())

	if (!menuCloseBody && !menuCloseBodyPlusMenu) {
		menuHeader.classList.remove('-open');
		headerBtn.classList.remove('-active');
	}
})