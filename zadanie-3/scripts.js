var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();


var textAfter = text.replace("Papugi", animalUpperCased);

console.log(textAfter);

var partOfTextAfter = textAfter.slice(0, (textAfter.length / 2));

console.log(partOfTextAfter);
