function christmasTree(height) {
	
	var tree=" ".repeat(height-1)+"";

	for (var i = 1 ; i < height ; i++ ) {
		var stars = 2 * i + 1;
		tree += "\n"+" ".repeat(height-i-1)+"".repeat(stars);
		}
	return tree;
}

christmasTree(20);