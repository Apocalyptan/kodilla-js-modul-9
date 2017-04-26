var a = prompt("Działanie: (a * a) + (2 * a * b) - (b * b)  Wpisz liczbę a: "),
	b = prompt("Działanie: (a * a) + (2 * a * b) - (b * b)  Wpisz liczbę b: "),
	value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value < 0) {
	console.log("Wynik ujemny");
	alert(value + " to wynik ujemny");
} else if (value > 0) {
	console.log("Wynik dodatni");
	alert(value + " to wynik dodatni.");
} else {
	console.log("Zero");
	alert("Wynik to zero.");
}