function selecionaArea(area) {
	let areas = {"exatas": "exatasCharts", "saude": "saudeCharts", "humanas": "humanasCharts"};
	let chart;
	let hiddenChart;
	for (let a in areas) {
		if (area === a) {
			document.getElementById(a).className += "btn-selected";
			chart = document.getElementById(areas[a]);
			chart.style.display = "block";
		} else {
			document.getElementById(a).className = document.getElementById(a).className.split("btn-selected").join("");
			hiddenChart = document.getElementById(areas[a]);
			hiddenChart.style.display = "none";
		}
	}
}