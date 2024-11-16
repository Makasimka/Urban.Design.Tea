document.addEventListener('DOMContentLoaded', () => {
	const burgerMenu = document.querySelector('.s-action-burger');
	const shortMenu  = document.querySelector('.s-short-menu');
	const closeMenu  = document.querySelector('.s-action-close-menu');

	if (burgerMenu) {
		burgerMenu.addEventListener('click', () => {
			if (shortMenu) {
				shortMenu.classList.add('active');
			}
		});
	}

	if (shortMenu) {
		shortMenu.addEventListener('click', (e) => {
			if (
				e.target?.tagName === 'A' ||
				e.target?.parentElement?.tagName === 'A'
			) {
				shortMenu?.classList.remove('active');
			}
		});
	}

	if (closeMenu) {
		closeMenu.addEventListener('click', () => {
			shortMenu?.classList.remove('active');
		});
	}
});
