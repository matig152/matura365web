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

function porownajTrudnosc(a, b) {
	return a.trudnosc - b.trudnosc;
  }


function getParameters(){
    trudnosc.clear();
	temat.clear();
    const select = document.getElementById('dzialy');
    dzial = select.options[select.selectedIndex].text;
    var cblatwy = document.getElementById("cblatwy");
	var cbsredni = document.getElementById("cbsredni");
	var cbtrudny = document.getElementById("cbtrudny");
	if(cblatwy.checked){trudnosc.add(cblatwy.value)}
	if(cbsredni.checked){trudnosc.add(cbsredni.value)}
	if(cbtrudny.checked){trudnosc.add(cbtrudny.value)}
    var liczbazadanel = document.getElementById("liczbazadan");
	liczbazadan = parseInt(liczbazadanel.value);
    const checkboxarray = [document.getElementById("cb11"), document.getElementById("cb22"), document.getElementById("cb33"), document.getElementById("cb44"), document.getElementById("cb55"), document.getElementById("cb66"), document.getElementById("cb77"), document.getElementById("cb88")];
	for(let i = 0; i<listatematow.length;i++){
		if(checkboxarray[i].checked) {
			temat.add(listatematow[i]);
		}
	}
}

function pokazOdpowiedzi(){
	document.getElementById("odpowiedzi").style.display = 'block'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'none';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'block';   
}
function ukryjOdpowiedzi(){
	document.getElementById("odpowiedzi").style.display = 'none'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'block';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'none'; 
}

function zapiszPdf(){
	const styles = "<style>h2{font-family: bahnschrift;font-stretch: condensed;font-size: 15px;border-top: 1px solid #000cbc;margin: auto;width: 100%;text-align:right;color:#000cbc;}</style><style>h4{font-family: bahnschrift;font-stretch: condensed;padding: 0px 0px 0px 0px;font-size: 15px;}</style><style>h5{font-family: bahnschrift;font-stretch: condensed;text-align: right;color: #000cbc;padding: 4px 2px 0px 2px;font-size: 15px;border-bottom: 1px solid #000cbc;}</style><style>p{font-family: bahnschrift;padding: 0px 0px 6px 0px;font-size: 15px;}</style>"
	var mywindow = window.open('', 'PRINT', 'height=600px,width=1000px');
    mywindow.document.write('<html><head><title>' + `Matura365_Sprawdzian_${dzial}`  + '</title>' + styles);
    mywindow.document.write('</head><body>');
    mywindow.document.write(document.getElementById("zadania").innerHTML);
	mywindow.document.write("<h2>Wygenerowano w aplikacji Matura365</h2>")
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
    mywindow.close();
}


function generujTest() {
	let loader = document.querySelectorAll('.loader')[0];
    getParameters();
	if (temat.size == 0 || trudnosc.size == 0 || liczbazadan == NaN){
		alert("Wprowadź parametry!");
		return;
	}
	if (!(liczbazadan >= 1 && liczbazadan <= 10)){
		alert("Nieprawidłowa liczba zadań!");
		return;
	}
	loader.style.display = 'grid';
	document.getElementById("parametry").style.display = 'none';
	document.getElementById("przyciskgeneruj").style.display = 'none';
	document.getElementById("instrukcja-test").style.display = 'none';
	const paragraph = document.getElementById("zadania");
	const paragraphodp = document.getElementById("odpowiedzi");
	var tekstzadan = ""; 
	var lista = new Array();
	const dzialjson = przypiszdzialjson();
	fetch(`zadania/${dzialjson}.json`)
		.then(res => res.json())
		.then(data => {
			const zadania = data;
			var j = 0;
			for(let i = 0; i<zadania.length; i++){
				if(temat.has(zadania[i].temat) && trudnosc.has(zadania[i].trudnosc.toString())){
					lista[j] = zadania[i];
					j+=1;
				}
			}
			shuffleArray(lista); 
			lista = lista.slice(0, liczbazadan);
			lista.sort(porownajTrudnosc);
			//console.log(lista);
			tekstzadan = `<h5>Dział: ${dzial}<br>`
			if (temat.size > 1){ 
				tekstzadan1 = "Tematy: ";
				for(let i=0; i<temat.size; i++){
					if (i!= temat.size - 1){
						tekstzadan1 += `${Array.from(temat.values())[i]}, `;
					}
					else{
						tekstzadan1 += `${Array.from(temat.values())[i]}`;
					}
				}
				tekstzadan += tekstzadan1 + "</h5>";
			}
			else{tekstzadan += `Temat: ${Array.from(temat.values())[0]}</h5>`}
			var tekstodpowiedzi = "";
			for(let i=0;i<lista.length; i++) {
				tekstzadan += `<h4>Zadanie ${i+1}.</h4> <p>${lista[i].tresc}</p>`;
				tekstodpowiedzi += `<h4>Zadanie ${i+1}.</h4> <p>${lista[i].odpowiedz}</p>`
			}
			paragraph.innerHTML = tekstzadan;
            paragraph.style.display = "block";
			paragraphodp.innerHTML = tekstodpowiedzi;
			listazadan = lista;
			//top.style.display = 'none';
			//loader.style.display = 'none';
		}); 
		document.getElementById("przyciskodpowiedzi").style.display = 'block';
		var x = window.matchMedia("(max-width: 1022px)")
		if (x.matches) {} 
		else {document.getElementById("przyciskpdf").style.display = 'block';}
		loader.style.display = 'none';
}