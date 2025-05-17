document.addEventListener('DOMContentLoaded', function () {
	new Splide('.splide', {
		type: 'loop',
		perPage: 3	,
		perMove: 1,
		autoplay: false,
		interval: 1000, // 3 seconds
		pauseOnHover: false,
		breakpoints: {
			1024: {
				perPage: 2,
			},
			640: {
				perPage: 1,
			},
		},
	}).mount();
});
