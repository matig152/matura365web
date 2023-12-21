function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getParametersLosuj() {
	trudnosc.clear();
	const select = document.getElementById("dzialy");
	dzial = select.options[select.selectedIndex].text;
	var cblatwy = document.getElementById("cblatwy");
	var cbsredni = document.getElementById("cbsredni");
	var cbtrudny = document.getElementById("cbtrudny");
	if(cblatwy.checked){trudnosc.add(cblatwy.value)}
	if(cbsredni.checked){trudnosc.add(cbsredni.value)}
	if(cbtrudny.checked){trudnosc.add(cbtrudny.value)}
	const selecttematy = document.getElementById("tematy");
	temat = selecttematy.options[selecttematy.selectedIndex].text;
	console.log("Dział: " + dzial);
	console.log("Temat: " + temat);
	console.log( "Trudnosci: " + Array.from(trudnosc.values()));
	
}

function przypiszdzialjsonrand(){
	var dzialjson = "";
	const rand = getRandomInt(0,10);
	if (rand == 0) {dzialjson = "liczbyrzeczywiste"}
	if (rand == 1) {dzialjson = "wyrazeniaalgebraiczne"} 
	if (rand == 2) {dzialjson = "rownania"}
	if (rand == 3) {dzialjson = "funkcje"}
	if (rand == 4) {dzialjson = "ciagi"}
	if (rand == 5) {dzialjson = "trygonometria"}
	if (rand == 6) {dzialjson = "geometriaanalityczna"}
	if (rand == 7) {dzialjson = "planimetria"}
	if (rand == 8) {dzialjson = "stereometria"}
	if (rand == 9) {dzialjson = "statystyka"}
	if (rand == 10) {dzialjson = "optymalizacja"}
	return dzialjson; 
}

function losujZadanie(){
	getParametersLosuj();
	const select = document.getElementById("dzialy");
	var dzialjson = "";
	if(select.value == 11){dzialjson = przypiszdzialjsonrand();}
	else{dzialjson = przypiszdzialjson();}
	document.getElementById("parametrylosowanie").style.display = 'none';
	document.getElementById("przyciskgeneruj").style.display = 'none';
	const paragraph = document.getElementById("zadania");
	const paragraphodp = document.getElementById("odpowiedz");
	var tekstzadan = "";
	var tekstodpowiedzi = "";
	var lista = new Array();
	fetch(`zadania/${dzialjson}.json`)
		.then(res => res.json())
		.then(data => {
			zadania = data;
			var j = 0;
			if(temat == "Dowolny"){
				for(let i = 0; i<zadania.length; i++){
					if(trudnosc.has(zadania[i].trudnosc.toString())){
						lista[j] = zadania[i];
						j+=1;
					}
				}
			}
			else{
				for(let i = 0; i<zadania.length; i++){
					if(temat == zadania[i].temat && trudnosc.has(zadania[i].trudnosc.toString())){
						lista[j] = zadania[i];
						j+=1;
					}
				}
			}
			zadanielosowe = lista[getRandomInt(0, lista.length)]
			var poziomstring = "";
			if (dzial == "Dowolny"){
				if (dzialjson == "liczbyrzeczywiste") {dzial = "Liczby rzeczywiste"}
				if (dzialjson == "wyrazeniaalgebraiczne") {dzial - "Wyrażenia algebraiczne"} 
				if (dzialjson == "rownania") {dzial = "Równania i nierówności"}
				if (dzialjson == "funkcje") {dzial = "Funkcje"}
				if (dzialjson == "ciagi") {dzial = "Ciągi"}
				if (dzialjson == "trygonometria") {dzial = "Trygonometria"}
				if (dzialjson == "geometriaanalityczna") {dzial = "Geometria analityczna"}
				if (dzialjson == "planimetria") {dzial = "Planimetria"}
				if (dzialjson == "stereometria") {dzial = "Stereometria"}
				if (dzialjson == "statystyka") {dzial = "Statystyka i prawdopodobieństwo"}
				if (dzialjson == "optymalizacja") {dzial = "Optymalizacja"}
			}
			if(zadanielosowe.trudnosc == 1){poziomstring = "łatwy"};
			if(zadanielosowe.trudnosc == 2){poziomstring = "średni"};
			if(zadanielosowe.trudnosc == 3){poziomstring = "trudny"};
			tekstzadan += `<h5>Dział: ${dzial}<br>Temat: ${zadanielosowe.temat}<br>Poziom trudności: ${poziomstring}</h5>`;
			tekstzadan +=  `<p><br><br>${zadanielosowe.tresc}</p>`;
			tekstodpowiedzi += `<p>${zadanielosowe.odpowiedz}</p>`;
			paragraph.innerHTML = tekstzadan;
			paragraphodp.innerHTML = tekstodpowiedzi;
			document.getElementById("przyciskodpowiedz").style.display = 'block';


		}); 

}

function updateTematyLosowanie(){
	const select = document.getElementById("dzialy");
	const divtemat = document.getElementById("temat");
	const selecttematy = document.getElementById("tematy");
	if (select.value == 11) {divtemat.style.display = 'none';}
	else{
		if (select.value == 0) {listatematow = liczbyrzeczywistetematy}
		if (select.value == 1) {listatematow = wyrazeniaalgebraicznetematy} 
		if (select.value == 2) {listatematow = rownaniatematy}
		if (select.value == 3) {listatematow = funkcjetematy}
		if (select.value == 4) {listatematow = ciagitematy}
		if (select.value == 5) {listatematow = trygonometriatematy}
		if (select.value == 6) {listatematow = geometriaanalitycznatematy}
		if (select.value == 7) {listatematow = planimetriatematy}
		if (select.value == 8) {listatematow = stereometriatematy}
		if (select.value == 9) {listatematow = statystykatematy}
		if (select.value == 10) {listatematow = optymalizacja}
		while (selecttematy.options.length > 0) {selecttematy.remove(0);}
		listatematow.unshift("Dowolny");
		for(let i=0;i<listatematow.length;i++){
			let newOption = new Option(listatematow[i],i);
			selecttematy.add(newOption,undefined);
		}
		divtemat.style.display = 'inline';
	}
}


function przypiszdzialjson(){
	const select = document.getElementById("dzialy");
	var dzialjson = "" ;
	if (select.value == 0) {dzialjson = "liczbyrzeczywiste"}
	if (select.value == 1) {dzialjson = "wyrazeniaalgebraiczne"} 
	if (select.value == 2) {dzialjson = "rownania"}
	if (select.value == 3) {dzialjson = "funkcje"}
	if (select.value == 4) {dzialjson = "ciagi"}
	if (select.value == 5) {dzialjson = "trygonometria"}
	if (select.value == 6) {dzialjson = "geometriaanalityczna"}
	if (select.value == 7) {dzialjson = "planimetria"}
	if (select.value == 8) {dzialjson = "stereometria"}
	if (select.value == 9) {dzialjson = "statystyka"}
	if (select.value == 10) {dzialjson = "optymalizacja"}
	return dzialjson; 
}