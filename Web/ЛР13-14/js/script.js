// Получение информации о последней модификации документа
var lastModified = document.lastModified
console.log(lastModified)
// Функция для вывода информации после нажатия на кнопку


// Назначение обработчика события на кнопку
const dateButton = document.querySelector('.buttonModifid');
console.log(dateButton)
dateButton.addEventListener("click", showLastModified);

function showLastModified() {
	setTimeout(function () {
		alert("Дата модификации: " + lastModified);
	}, 50);
}
// Удаление элемента при щелчке по нему
var elementToBeRemoved = document.querySelector(".img1");
elementToBeRemoved.addEventListener("click", function () {
	elementToBeRemoved.remove();
});

var styleButton = document.getElementById("styleButton");
var elementToStyle = document.querySelector(".img1");

styleButton.addEventListener("click", function () {
	// Увеличение размеров изображения
	elementToStyle.style.width = "400px";
	elementToStyle.style.height = "400px";

	// Добавление рамки красного цвета
	elementToStyle.style.border = "1px solid red";

	// Перемещение изображения в правый верхний угол страницы
	elementToStyle.style.position = "fixed";
	elementToStyle.style.top = "0";
	elementToStyle.style.right = "0";
});

var infoButton = document.getElementById("infoButton");

infoButton.addEventListener("click", function () {
	// Получение информации об операционной системе и браузере пользователя
	var os = window.navigator.platform;
	var browser = window.navigator.userAgent;

	// Открытие нового окна с информацией
	var infoWindow = window.open("", "Информация", "width=400,height=200");
	infoWindow.document.write("<h2>Информация о системе:</h2>");
	infoWindow.document.write("<p>Операционная система: " + os + "</p>");
	infoWindow.document.write("<p>Браузер: " + browser + "</p>");

	// Автоматическое закрытие окна через 4 секунды
	setTimeout(function () {
		infoWindow.close();
	}, 4000);
});