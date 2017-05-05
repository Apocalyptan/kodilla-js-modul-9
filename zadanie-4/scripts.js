function drawTree(treeHeight) {
	for (var i = 0; i < treeHeight; i++) {
		var star = '';
		var whitespace = '';
		for (var j = 0; j < i + 1; j++) {
			star += '*';
		}
		// for (var k = 0; k < i + 1; k++) {
		// 	whitespace += " ";
		// }
		console.log(whitespace + star);
	}
}

drawTree(5);
//drawTree(prompt('Wpisz wysokość choinki:'));