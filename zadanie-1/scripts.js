function getTriangleArea (a, h) {
	if (a <= 0 || h <= 0) {
		return "Nieprawidłowe dane"
	}
	else {
		return a * h / 2;
	}
}

console.log(getTriangleArea(10, 6)); // 30

var triangleArea1 = getTriangleArea(10, 50); // 250
var triangleArea2 = getTriangleArea(50, triangleArea1); // 6250
var triangleArea3 = getTriangleArea(triangleArea2, 666); // 2081250

console.log(triangleArea1, triangleArea2, triangleArea3);

var userTriangleArea = getTriangleArea(prompt("Podaj podstawę trójkąta:"), prompt("Podaj wysokość trójkąta:")); // User input calc

console.log("Twoje pole trójkąta wynosi: " + userTriangleArea);
alert("Twoje pole trójkąta wynosi: " + userTriangleArea);
