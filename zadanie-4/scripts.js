function drawTree(treeHeight) {
	for (var i = 0 ; i < treeHeight ; i++) {
		var star = "";
		for (var j = -1 ; j < 2*i ; j++) {
			star += "*";
		}
		console.log(star);
	}
}

drawTree(prompt("Wpisz wysokość choinki:"));