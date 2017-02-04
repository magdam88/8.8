var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var upperCasedAnimal = animal.toUpperCase();
console.log(upperCasedAnimal);
var textReplace = text.replace('Papugi', upperCasedAnimal);
console.log(textReplace);
console.log(textReplace.length / 2);

var halfTextLength = textReplace.length / 2;
var halfText = textReplace.substr(0, halfTextLength);
console.log(halfText);