function selecionaExatas() {
	document.getElementById("exatas").className += "btn-selected";
	document.getElementById("saude").className = document.getElementById("saude").className.split("btn-selected").join("");
	document.getElementById("humanas").className = document.getElementById("humanas").className.split("btn-selected").join("");

	var e = document.getElementById("exatasCharts");
	var s = document.getElementById("saudeCharts");
	var h = document.getElementById("humanasCharts");
	e.style.display = "block";
	s.style.display = "none";
	h.style.display = "none";
}

function selecionaSaude() {
	document.getElementById("saude").className += "btn-selected";
	document.getElementById("exatas").className = document.getElementById("exatas").className.split("btn-selected").join("");
	document.getElementById("humanas").className = document.getElementById("humanas").className.split("btn-selected").join("");

	var e = document.getElementById("exatasCharts");
	var s = document.getElementById("saudeCharts");
	var h = document.getElementById("humanasCharts");
	e.style.display = "none";
	s.style.display = "block";
	h.style.display = "none";
}

function selecionaHumanas() {
	document.getElementById("humanas").className += "btn-selected";
	document.getElementById("exatas").className = document.getElementById("exatas").className.split("btn-selected").join("");
	document.getElementById("saude").className = document.getElementById("saude").className.split("btn-selected").join("");

	var e = document.getElementById("exatasCharts");
	var s = document.getElementById("saudeCharts");
	var h = document.getElementById("humanasCharts");
	e.style.display = "none";
	s.style.display = "none";
	h.style.display = "block";
}