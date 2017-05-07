function drawTree(treeHeight) {
	for (var i = 0; i < treeHeight; i++) {
		var star = '';
		var whitespace = '';
		for (var j = 0; j < 2 * i + 1; j++) {
			star += '*';
		}
		for (var k = i; k < treeHeight; k++) {
			whitespace += " ";
		}
		console.log(whitespace + star);
	}
}

drawTree(prompt('Wpisz wysokość choinki:'));