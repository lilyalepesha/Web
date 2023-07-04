document.addEventListener('DOMContentLoaded', function () {
	const minusBtn = document.querySelector('.minus-btn');
	const plusBtn = document.querySelector('.plus-btn');
	const quantityInput = document.querySelector('.quantity-input');

	minusBtn.addEventListener('click', function () {
		const currentValue = parseInt(quantityInput.value);
		if (currentValue > 1) {
			quantityInput.value = currentValue - 1;
		}
	});

	plusBtn.addEventListener('click', function () {
		const currentValue = parseInt(quantityInput.value);
		quantityInput.value = currentValue + 1;
	});
});