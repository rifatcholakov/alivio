document.addEventListener("DOMContentLoaded", function () {
	const menutriger = document.querySelector('#mobile-menu-triger');
	const navigation = document.querySelector('#site-navigation');

	menutriger.addEventListener('click', function() {
		navigation.classList.toggle('active');
	})
});