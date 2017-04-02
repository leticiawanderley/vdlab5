function selecionaExatas() {
	document.getElementById("exatas").className += "btn-selected";
	document.getElementById("saude").className = document.getElementById("saude").className.split("btn-selected").join("");
	document.getElementById("humanas").className = document.getElementById("humanas").className.split("btn-selected").join("");
}

function selecionaSaude() {
	document.getElementById("saude").className += "btn-selected";
	document.getElementById("exatas").className = document.getElementById("exatas").className.split("btn-selected").join("");
	document.getElementById("humanas").className = document.getElementById("humanas").className.split("btn-selected").join("");
}

function selecionaHumanas() {
	document.getElementById("humanas").className += "btn-selected";
	document.getElementById("exatas").className = document.getElementById("exatas").className.split("btn-selected").join("");
	document.getElementById("saude").className = document.getElementById("saude").className.split("btn-selected").join("");
}