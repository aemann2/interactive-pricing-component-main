const slider = document.querySelector('#slider');
const toggle = document.querySelector('#toggle');

const pageviews = document.querySelector('.main__top__k');
const total = document.querySelector('.main__top__total');
const discount = document.querySelector('.main__bottom__discount');

slider.addEventListener('input', (e) => {
	switch(parseInt(e.target.value)) {
		case 0: 
			pageviews.innerHTML = '10K';
			total.innerHTML = '$8.00';
			break;
		case 20: 
			pageviews.innerHTML = '50K';
			total.innerHTML = '$12.00';
			break;
		case 40: 
			pageviews.innerHTML = '100K';
			total.innerHTML = '$16.00';
			break;
		case 60: 
			pageviews.innerHTML = '500K';
			total.innerHTML = '$24.00';
			break;
		case 80: 
			pageviews.innerHTML = '1M';
			total.innerHTML = '$36.00';
			break;
		default:
			pageviews.innerHTML = '100K';
			total.innerHTML = '$16.00';
	}
});

toggle.addEventListener('change', (e) => {
	if (e.target.checked) {
		discount.innerHTML = '';
	} else {
		discount.innerHTML = '25% discount';
	}
})

// Slider code taken from:
// https://codepen.io/nosurprisethere/pen/KJxwQz

// Setting color of our sliders
const settings={
  fill: 'hsl(174, 77%, 80%)',
  background: 'hsl(224, 65%, 95%)'
}

// Find all our sliders
const sliders = document.querySelectorAll('.range-slider');

// Iterate through that list of sliders
Array.prototype.forEach.call(sliders,(slider)=>{
  // Look inside our slider for our input add an event listener
//   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
  slider.querySelector('input').addEventListener('input', (event)=>{
    applyFill(event.target);
  });
  // Don't wait for the listener, apply it now!
  applyFill(slider.querySelector('input'));
});

// This function applies the fill to our sliders by using a linear gradient background
function applyFill(slider) {
  // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
  const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
  // now we'll create a linear gradient that separates at the above point
  // Our background color will change here
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
  slider.style.background = bg;
}