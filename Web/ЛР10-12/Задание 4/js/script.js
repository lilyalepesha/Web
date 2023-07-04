function calculate(x, y) {
	if (y < 0 || x === 2 || x === -2) {
		document.write("Введены некорректные значения");
		return;
	}
	else {
		var result = (1 + y) * ((2 * x + Math.sqrt(y) - (x + y)) / (y + (1 / (Math.pow(x, 2) - 4))));
		document.write("Результат расчета: " + result);
		return result;
	}
}
