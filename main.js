const slider = document.querySelector('#slider');
const toggle = document.querySelector('#toggle');
const input = document.querySelector('input');

const pageviews = document.querySelector('.main__top__k');
const total = document.querySelector('.main__top__total');
const discount = document.querySelector('.main__bottom__discount');

// Event listeners for the slider and toggle button
let price = 16;

slider.addEventListener('input', (e) => {
	switch(parseInt(e.target.value)) {
		case 0: 
			pageviews.innerHTML = '10K';
			price = 8;
			break;
		case 20: 
			pageviews.innerHTML = '50K';
			price = 12;
			break;
		case 40: 
			pageviews.innerHTML = '100K';
			price = 16;
			break;
		case 60: 
			pageviews.innerHTML = '500K';
			price = 24;
			break;
		case 80: 
			pageviews.innerHTML = '1M';
			price = 36;
			break;
		default:
			pageviews.innerHTML = '100K';
			price = 16;
	}

	total.innerText = `$${price}.00`
});

const setDiscount = () => {
	if (toggle.checked) {
		total.innerHTML = `$${price * .75}.00`;
	} else {
		total.innerHTML = `$${price}.00`;
	}
};

toggle.addEventListener("input", setDiscount);


// Changing the text for the badge based on window width
if (window.innerHeight < 900) {
	discount.innerHTML = '25%'
} else {
	discount.innerHTML = '25% discount'
}

window.addEventListener('resize', e => {
	if (e.target.innerWidth >= 900) {
		discount.innerHTML = '25% discount'
	} else {
		discount.innerHTML = '25%'
	}
})

// Range sliders are a nightmare. Slider code taken from:
// https://codepen.io/nosurprisethere/pen/KJxwQz

// Setting color of our sliders
const settings={
  fill: 'hsl(174, 77%, 80%)',
  background: 'hsl(224, 65%, 95%)'
}

input.addEventListener('input', (event)=>{
	applyFill(event.target);
});
// Don't wait for the listener, apply it now!
applyFill(input);

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  // now we'll create a linear gradient that separates at the above point
  // Our background color will change here
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}