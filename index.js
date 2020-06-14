window.onload = function () {
	var obj = new JTH({
		"data": __content,
		"div": "document.getElementById('page1').innerHTML",
		"templates": __templates
	}).render();
}
