var list = document.getElementById("list");
var add = document.getElementById("addElem");
var n = list.getElementsByTagName("li");

add.addEventListener("click", function () {
	var createNewItem = document.createElement("li");
	var itemNumber = n.length;
	list.appendChild(createNewItem).innerHTML += 'item ' + itemNumber;
})