function desenhaGrafo(file, id) {
	d3.json(file, function(error, apiresponse) {
		if (error) throw error;

		var width = 1000,
			height = 500;

		var svg = d3.select(id)
			.append("svg")
			.attr('version', '1.1')
			.attr('viewBox', '0 0 '+width+' '+height)
			.attr('width', '100%');

		var color = d3.scaleOrdinal(d3.schemeCategory10);

		var simulation = d3.forceSimulation()
			.force("link", d3.forceLink().id(function(d) { return d.id; }))
			.force("charge", d3.forceManyBody().strength(-100))
			.force("center", d3.forceCenter(width / 2, height / 2))
			.force("forceY", d3.forceY(-15))
			.force("forceX", d3.forceX(-15));

		var links = [];
		apiresponse.forEach(function(d) {
			d.pre_requisitos.forEach(function(p){
				links.push({source: String(d.codigo_disciplina), target: String(p)});
			});
			if (d.pos_requisitos.length === 0 && d.pre_requisitos.length != 0) {
				links.push({source: String(d.codigo_disciplina), target: String(1000)})
			}
			else if (d.pre_requisitos.length === 0) {
				links.push({source: String(0), target: String(d.codigo_disciplina)})
			}
		})

		var nodes = apiresponse.map(function(d) {
			return {id: String(d.codigo_disciplina),
					codigo_departamento : d.codigo_departamento,
					nome : d.disciplina,
					creditos: d.creditos};
		});

		nodes.push({
			id: '0',
			codigo_departamento : 0,
			nome : "Início do curso",
			creditos: 10
		});

		nodes.push({
			id: '1000',
			codigo_departamento : 1000,
			nome : "Fim do curso",
			creditos: 10
		});

		console.dir(links);
		console.dir(nodes);

		var link = svg.append("g")
				.attr("class", "link")
			.selectAll("line")
			    .data(links)
			.enter().append("line");

		var node = svg.append("g")
			    .attr("class", "nodes")
			.selectAll("circle")
			    .data(nodes)
			.enter().append("circle")
			    .attr("fill", function(d) { return color(d.codigo_departamento); })
			    .attr("r", function(d) { return ((+d.creditos <= 1) ? 2.5 : +d.creditos*1.5); })
			.call(d3.drag()
			    .on("start", dragstarted)
			    .on("drag", dragged)
			    .on("end", dragended));

		node.append("title")
			.text(function(d) { return d.nome; });

		simulation
			.nodes(nodes)
			.on("tick", ticked);

		simulation.force("link")
			.links(links);

		function ticked() {
			link
				.attr("x1", function(d) { return d.source.x; })
			    .attr("y1", function(d) { return d.source.y; })
			    .attr("x2", function(d) { return d.target.x; })
			    .attr("y2", function(d) { return d.target.y; });

			node
			    .attr("cx", function(d) { return d.x; })
			    .attr("cy", function(d) { return d.y; });
		}

		function dragstarted(d) {
			if (!d3.event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		}

		function dragged(d) {
			d.fx = d3.event.x;
			d.fy = d3.event.y;
		}

		function dragended(d) {
			if (!d3.event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		}
	});
}

//Exatas
desenhaGrafo("dados_disciplinas/ciencia_da_computacao_d_cg.json", "#chart_cc");
desenhaGrafo("dados_disciplinas/engenharia_eletrica_cg.json", "#chart_ee");

desenhaGrafo("dados_disciplinas/arquitetura_e_urbanismo_d_cg.json", "#chart_au");
desenhaGrafo("dados_disciplinas/engenharia_civil_d_cg.json", "#chart_ec");

desenhaGrafo("dados_disciplinas/engenharia_de_producao_d_cg.json", "#chart_pr");
desenhaGrafo("dados_disciplinas/engenharia_de_materiais_d_cg.json", "#chart_mt");

//Saude
desenhaGrafo("dados_disciplinas/enfermagem_d_cg.json", "#chart_enf");
desenhaGrafo("dados_disciplinas/medicina_d_cg.json", "#chart_med");

desenhaGrafo("dados_disciplinas/nutricao_d_ct.json", "#chart_nut");
desenhaGrafo("dados_disciplinas/odontologia_d_pt.json", "#chart_odo");

desenhaGrafo("dados_disciplinas/farmacia_d_ct.json", "#chart_far");
desenhaGrafo("dados_disciplinas/medicina_veterinaria_d_pt.json", "#chart_vet");

//Humanas
desenhaGrafo("dados_disciplinas/letras_lingua_portuguesa_lic_d_cg.json", "#chart_letras");
desenhaGrafo("dados_disciplinas/letras_lingua_inglesa_lic_d_cg.json", "#chart_ingles");

desenhaGrafo("dados_disciplinas/historia_lic_d_cg.json", "#chart_historia");
desenhaGrafo("dados_disciplinas/geografia_lic_d_cg.json", "#chart_geografia");

desenhaGrafo("dados_disciplinas/comunicacao_social_d_cg.json", "#chart_social");
desenhaGrafo("dados_disciplinas/pedagogia_lic_m_cg.json", "#chart_pedagogia");
