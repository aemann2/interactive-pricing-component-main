const slider = document.querySelector('#slider');
const toggle = document.querySelector('#toggle');

const pageviews = document.querySelector('.main__top__k');
const total = document.querySelector('.main__top__total');
const discount = document.querySelector('.main__bottom__discount');

slider.addEventListener('input', (e) => {
	switch(parseInt(e.target.value)) {
		case 0: 
			pageviews.innerHTML = '10k';
			total.innerHTML = '8';
			break;
		case 20: 
			pageviews.innerHTML = '50k';
			total.innerHTML = '12';
			break;
		case 40: 
			pageviews.innerHTML = '100k';
			total.innerHTML = '16';
			break;
		case 60: 
			pageviews.innerHTML = '500k';
			total.innerHTML = '24';
			break;
		case 80: 
			pageviews.innerHTML = '1M';
			total.innerHTML = '36';
			break;
		default:
			pageviews.innerHTML = '100k';
			total.innerHTML = '16';
	}
});

toggle.addEventListener('change', (e) => {
	if (e.target.checked) {
		discount.innerHTML = '';
	} else {
		discount.innerHTML = '25% discount';
	}
})