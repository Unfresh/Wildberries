const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

// cart
const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalCLose = document.querySelector('.modal-close');

const openModal = function () {
	modalCart.classList.add('show');
};

const closeModal = function () {
	modalCart.classList.remove('show');
};

modalCart.addEventListener('click', (e) => {
	let target = e.target;
	if(target === modalCart) {
		closeModal();
	}
});

buttonCart.addEventListener('click', openModal);
modalCLose.addEventListener('click', closeModal);

// scroll smooth

const scrollLinks = document.querySelectorAll('a.scroll-link');

const scrollSmooth = function() {
	for (let i = 0; i < scrollLinks.length; i++) {
		scrollLinks[i].addEventListener('click', (e) => {
			e.preventDefault();
			const id = scrollLinks[i].getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
};

scrollSmooth();