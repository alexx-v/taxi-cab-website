function hamburgerToggle() {
	let hamburger = document.getElementById('hamburger');
	let menu = document.querySelector('.menu');

	hamburger.addEventListener('click', function toggle() {
		menu.classList.toggle('header__menu--active');
		hamburger.classList.toggle('hamburger--active');
	});
}

document.addEventListener('DOMContentLoaded', hamburgerToggle);
