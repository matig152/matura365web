//FRONTEND
async function hidepreload(){
    const preloader = document.querySelectorAll('.preloader')[0];
    //await new Promise(r => setTimeout(r, 1000));
    preloader.style.opacity = 0;
    await new Promise(r => setTimeout(r, 500));
    preloader.style.display = 'none';
}

function mobilemenu(){
    const sideNav = document.querySelectorAll('.sidenav')[0];
    if(sideNav.offsetWidth > 0){hideSideNav();}
    else{showSideNav();}
}


async function showSideNav(){
    const sideNav = document.querySelectorAll('.sidenav')[0];
    const mask = document.querySelectorAll('.mask')[0];
    sideNav.style.width = '220px';
    sideNav.style.padding = '10px';
    mask.style.display = 'block';
    await new Promise(r => setTimeout(r, 1));
    mask.style.opacity = 1;
}

async function hideSideNav(){
    const sideNav = document.querySelectorAll('.sidenav')[0];
    const mask = document.querySelectorAll('.mask')[0];
    sideNav.style.width = '0';
    sideNav.style.padding = '0';
    mask.style.opacity = 0;
    await new Promise(r => setTimeout(r, 500));
    mask.style.display = 'none';
}




//BACKEND

//zmienne do parametrów
var dzial = "";
var liczbazadan;
var trudnosc = new Set();
var temat = new Set();
let listatematow = new Array();
//tematy w działach
const liczbyrzeczywistetematy = ["Ułamki", "Potęgi i pierwiastki", "Logarytmy", "Procenty", "Zbiory i przedziały"];
const wyrazeniaalgebraicznetematy = ["Upraszczanie wyrażeń", "Wzory skróconego mnożenia", "Dowody algebraiczne"];
const rownaniatematy = ["Równania liniowe", "Równania wymierne", "Układy równań", "Równania z wartością bezwzględną", "Równania kwadratowe", "Nierówności liniowe", "Nierówności z wartością bezwzględną", "Nierówności kwadratowe"];
const funkcjetematy = ["Własności funkcji", "Funkcje liniowe", "Funkcje kwadratowe", "Funkcje wykładnicze i logarytmiczne"];
const ciagitematy = ["Ciągi Arytmetyczne", "Ciągi Geometryczne"];
const trygonometriatematy = ["Własności f. trygonometrycznych",  "Zastosowania f. trygonometrycznych"];
const geometriaanalitycznatematy = ["Odległości, symetrie, proste", "Okręgi"];
const planimetriatematy = ["Trójkąty", "Czworokąty i wielokąty", "Koła i okręgi"];
const stereometriatematy = ["Graniastosłupy i ostrosłupy", "Bryły obrotowe", "Kąty w bryłach"];
const statystykatematy = ["Statystyka", "Kombinatoryka", "Prawdopodobieństwo"]; 
const optymalizacja = ["Optymalizacja"];
listatematow = liczbyrzeczywistetematy;

var listazadan = new Array;

function updateTematy() {
	const select = document.getElementById("dzialy");
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
	const checkboxdivarray = [document.getElementById("cb1"), document.getElementById("cb2"), document.getElementById("cb3"), document.getElementById("cb4"), document.getElementById("cb5"), document.getElementById("cb6"), document.getElementById("cb7"), document.getElementById("cb8")];
	const checkboxarray = [document.getElementById("cb11"), document.getElementById("cb22"), document.getElementById("cb33"), document.getElementById("cb44"), document.getElementById("cb55"), document.getElementById("cb66"), document.getElementById("cb77"), document.getElementById("cb88")];
	const checkboxlabelsarray = [document.getElementById("cb11l"), document.getElementById("cb22l"), document.getElementById("cb33l"), document.getElementById("cb44l"), document.getElementById("cb55l"), document.getElementById("cb66l"), document.getElementById("cb77l"), document.getElementById("cb88l")];
	for(let i = 0; i < 8; i++){checkboxdivarray[i].style.display='none';}
	for(let i = 0; i < listatematow.length;  i++){
		checkboxlabelsarray[i].innerHTML = listatematow[i];
		checkboxdivarray[i].style.display='inline';
		checkboxarray[i].checked = false;
	}
}






//#region DO FORMUŁY 2023
const listatrudnosci = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3];
const listadzialow = ["liczbyrzeczywiste.json", "wyrazeniaalgebraiczne.json","rownania.json","funkcje.json", "ciagi.json", "trygonometria.json", "planimetria.json","geometriaanalityczna.json", "stereometria.json","statystyka.json","optymalizacja.json"]
const listatematow2023 = ["Potęgi i pierwiastki","Logarytmy", "Procenty", "Upraszczanie wyrażeń", "Dowody algebraiczne", "Równania wymierne", "Układy równań", "Równania kwadratowe", "Nierówności liniowe", "Nierówności z wartością bezwzględną", "Nierówności kwadratowe", "Własności funkcji", "Funkcje liniowe", "Funkcje kwadratowe", "Funkcje kwadratowe", "Funkcje wykładnicze i logarytmiczne", "Ciągi Arytmetyczne", "Ciągi Arytmetyczne", "Ciągi Geometryczne", "Ciągi Geometryczne", "x", "x", "x", "x", "Odległości, symetrie, proste", "Odległości, symetrie, proste", "Okręgi", "x", "x", "Statystyka", "Statystyka", "Kombinatoryka", "Prawdopodobieństwo", "Optymalizacja"] 
var listazadan = new Array;

async function formula2023(){
	const paragraph = document.getElementById("arkusztresc");
	const paragraphodp = document.getElementById("odpowiedzi2023");
	var tekstdozadan = "";
	var tekstodp = "";
    shuffleArray(listatrudnosci);
	for (let i=0;i<34;  i++){
		if(i<3) {dzialjson = listadzialow[0]}
		else if(i>=3 && i<=4) {dzialjson = listadzialow[1]}
		else if(i>=5 && i<=10) {dzialjson = listadzialow[2]}
		else if(i>=11 && i<=15) {dzialjson = listadzialow[3]}
		else if(i>=16 && i<=19) {dzialjson = listadzialow[4]}
		else if(i == 20) {dzialjson = listadzialow[5]}
		else if(i>=21 && i<=23) {dzialjson = listadzialow[6]}
		else if(i>=24 && i<=26) {dzialjson = listadzialow[7]}
		else if(i>=27 && i<=28) {dzialjson = listadzialow[8]}
		else if(i>=29 && i<=32) {dzialjson = listadzialow[9]}
		else {dzialjson = listadzialow[10]}
		const value = await get(dzialjson, i);
    	//listazadan.push(value)
	}
	//console.log(listazadan);
	for(let i=0;i<34;i++){
		tekstdozadan += `<h4 class="naglowekmatura">Zadanie ${i+1}. </h4><p>${listazadan[i].tresc}</p>`
		tekstodp += `<h4 class="naglowekmatura">Zadanie ${i+1}. </h4><p>${listazadan[i].odpowiedz}</p>`
	}
	paragraph.innerHTML = tekstdozadan;
	paragraphodp.innerHTML = tekstodp;
}

function get(dzialjson, i) {
	var lista = new Array;
	
	return new Promise((resolve, reject) => {
		fetch(`zadania/${dzialjson}`)
		.then(res => res.json())
		.then(data => {
			zadania = data;
			var j=0;
			for(let k=0;k<zadania.length;k++){
				if(i == 20 || i == 21 || i == 22 || i == 23 || i == 27 || i == 28){
					if(zadania[k].trudnosc.toString() == listatrudnosci[i] && zadania[k].czymat == 1){
						lista[j] = zadania[k];
						j+=1;
					}
				}
				else{
					if(zadania[k].temat == listatematow2023[i] && zadania[k].trudnosc.toString() == listatrudnosci[i] && zadania[k].czymat == 1){
						lista[j] = zadania[k];
						j+=1;
					}
				}
			}
			listazadan[i] = lista[getRandomInt(0, lista.length-1)];
			//console.log(i+1 +". " + dzialjson + ": " + listazadan[i].temat + " " + listazadan[i].tresc);
			resolve(data);
		});
	});
  }

  function pokazOdpowiedzi2023(){
	document.getElementById("odpowiedzi2023").style.display = 'block'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'none';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'inline';  
}
function ukryjOdpowiedzi2023(){
	document.getElementById("odpowiedzi2023").style.display = 'none'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'inline';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'none'; 
}
function zapiszPdf2023(){
	const styles = "<style>h2{font-family: bahnschrift;font-stretch: condensed;font-size: 15px;border-top: 1px solid #000cbc;margin: auto;width: 100%;text-align:right;color:#000cbc;}</style><style>h4{font-family: bahnschrift;font-stretch: condensed;padding: 0px 0px 0px 0px;font-size: 15px;}</style><style>h5{font-family: bahnschrift;font-stretch: condensed;text-align: right;color: #000cbc;padding: 4px 2px 0px 2px;font-size: 15px;border-bottom: 1px solid #000cbc;}</style><style>p{font-family: bahnschrift;padding: 0px 0px 6px 0px;font-size: 15px;}</style><style>.naglowekmatura{margin-bottom: 5px;margin-top: 10px;background-color:#209cfe;padding:2px 0 0 0px;color:black;font-weight: 600;font-stretch:normal;font-size: 16px;}</style>"
	var mywindow = window.open('', 'PRINT', 'height=600px,width=1000px');
    mywindow.document.write('<html><head><title>' + "Matura365_ArkuszMaturalny2023"  + '</title>' + styles);
    mywindow.document.write('</head><body><h5>Arkusz Maturalny - Formuła 2023</h5>');
    mywindow.document.write(document.getElementById("arkusztresc").innerHTML);
	mywindow.document.write("<h2>Wygenerowano w aplikacji Matura365</h2>")
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
    mywindow.close();
}
//#endregion DO FORMUŁY 2023

//#region FORMULA 2015
const listatrudnosci2015 = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3];
const listatematow2015 = ["Potęgi i pierwiastki","Logarytmy", "Procenty", "Wzory skróconego mnożenia", "Dowody algebraiczne", "Równania liniowe", "Równania wymierne", "Układy równań","Równania z wartością bezwzględną", "Równania kwadratowe", "Nierówności liniowe", "Nierówności z wartością bezwzględną", "Nierówności kwadratowe", "Własności funkcji", "Funkcje liniowe", "Funkcje kwadratowe", "Funkcje kwadratowe", "Funkcje wykładnicze i logarytmiczne", "Ciągi Arytmetyczne", "Ciągi Geometryczne", "Własności f. trygonometrycznych", "Zastosowania f. trygonometrycznych", "Trójkąty", "Trójkąty","Czworokąty i wielokąty","Koła i okręgi","Koła i okręgi", "Odległości, symetrie, proste", "Okręgi", "Graniastosłupy i ostrosłupy", "Bryły obrotowe","Kąty w bryłach", "Statystyka", "Statystyka", "Kombinatoryka", "Prawdopodobieństwo"];
async function formula2015(){
	const paragraph = document.getElementById("arkusztresc");
	const paragraphodp = document.getElementById("odpowiedzi2015");
	var tekstdozadan = "";
	var tekstodp = "";
	shuffleArray(listatrudnosci2015)
	for (let i=0;i<36;  i++){
		if(i<3) {dzialjson = listadzialow[0]}
		else if(i>=3 && i<=4) {dzialjson = listadzialow[1]}
		else if(i>=5 && i<=12) {dzialjson = listadzialow[2]}
		else if(i>=13 && i<=17) {dzialjson = listadzialow[3]}
		else if(i>=18 && i<=19) {dzialjson = listadzialow[4]}
		else if(i>=20 && i<=21) {dzialjson = listadzialow[5]}
		else if(i>=22 && i<=26) {dzialjson = listadzialow[6]}
		else if(i>=27 && i<=28) {dzialjson = listadzialow[7]}
		else if(i>=29 && i<=31) {dzialjson = listadzialow[8]}
		else if(i>=32 && i<=35) {dzialjson = listadzialow[9]}
		const value = await get2015(dzialjson, i);
    	//listazadan.push(value)
	}
	//console.log(listazadan);
	for(let i=0;i<36;i++){
		tekstdozadan += `<h4 class="naglowekmatura">Zadanie ${i+1}. </h4><p>${listazadan[i].tresc}</p>`
		tekstodp += `<h4 class="naglowekmatura">Zadanie ${i+1}. </h4><p>${listazadan[i].odpowiedz}</p>`
	}
	paragraph.innerHTML = tekstdozadan;
	paragraphodp.innerHTML = tekstodp;
	console.log(tekstodp)
	 
}
function get2015(dzialjson, i) {
	var lista = new Array;
	
	return new Promise((resolve, reject) => {
		fetch(`zadania/${dzialjson}`)
		.then(res => res.json())
		.then(data => {
			zadania = data;
			var j=0;
			for(let k=0;k<zadania.length;k++){
				if(zadania[k].temat == listatematow2015[i] && zadania[k].trudnosc.toString() == listatrudnosci2015[i] && zadania[k].czymat == 1){
					lista[j] = zadania[k];
					j+=1;
				}
			}
			listazadan[i] = lista[getRandomInt(0, lista.length-1)];
			//console.log(i+1 +". " + dzialjson + ": " + listazadan[i].temat + " " + listazadan[i].tresc);
			resolve(data);
		});
	});
}
function pokazOdpowiedzi2015(){
	document.getElementById("odpowiedzi2015").style.display = 'block'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'none';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'inline';  
}
function ukryjOdpowiedzi2015(){
	document.getElementById("odpowiedzi2015").style.display = 'none'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'inline';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'none'; 
}
function zapiszPdf2015(){
	const styles = "<style>h2{font-family: bahnschrift;font-stretch: condensed;font-size: 15px;border-top: 1px solid #000cbc;margin: auto;width: 100%;text-align:right;color:#000cbc;}</style><style>h4{font-family: bahnschrift;font-stretch: condensed;padding: 0px 0px 0px 0px;font-size: 15px;}</style><style>h5{font-family: bahnschrift;font-stretch: condensed;text-align: right;color: #000cbc;padding: 4px 2px 0px 2px;font-size: 15px;border-bottom: 1px solid #000cbc;}</style><style>p{font-family: bahnschrift;padding: 0px 0px 6px 0px;font-size: 15px;}</style><style>.naglowekmatura{margin-bottom: 5px;margin-top: 10px;background-color:#209cfe;padding:2px 0 0 0px;color:black;font-weight: 600;font-stretch:normal;font-size: 16px;}</style>"
	var mywindow = window.open('', 'PRINT', 'height=600px,width=1000px');
    mywindow.document.write('<html><head><title>' + "Matura365_ArkuszMaturalny2015"  + '</title>' + styles);
    mywindow.document.write('</head><body><h5>Arkusz Maturalny - Formuła 2015</h5>');
    mywindow.document.write(document.getElementById("arkusztresc").innerHTML);
	mywindow.document.write("<h2>Wygenerowano w aplikacji Matura365</h2>")
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
    mywindow.close();
}
//#endregion FORMULA 2015

//#region MALA MATURA
const listatrudnoscimalamatura = [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3];

async function malaMatura(){
	listazadan.clear; 
	const paragraph = document.getElementById("arkusztresc");
	const paragraphodp = document.getElementById("odpowiedzimalamatura");
	var tekstdozadan = "";
	var tekstodp = "";
	shuffleArray(listatrudnoscimalamatura)
	for (let i=0;i<11;  i++){
		if(i == 0) {dzialjson = listadzialow[0]}
		else if(i == 1) {dzialjson = listadzialow[1]}
		else if(i == 2) {dzialjson = listadzialow[2]}
		else if(i == 3) {dzialjson = listadzialow[3]}
		else if(i == 4) {dzialjson = listadzialow[4]}
		else if(i == 5) {dzialjson = listadzialow[5]}
		else if(i == 6) {dzialjson = listadzialow[6]}
		else if(i == 7) {dzialjson = listadzialow[7]}
		else if(i == 8) {dzialjson = listadzialow[8]}
		else if(i == 9) {dzialjson = listadzialow[9]}
		else if(i == 10) {dzialjson = listadzialow[10]}
		const value = await getMalaMatura(dzialjson, i);
    	//listazadan.push(value)
	}
	//console.log(listazadan);
	for(let i=0;i<11;i++){
		tekstdozadan += `<h4 class="naglowekmatura">Zadanie ${i+1}. </h4><p>${listazadan[i].tresc}</p>`
		tekstodp += `<h4 class="naglowekmatura">Zadanie ${i+1}. </h4><p>${listazadan[i].odpowiedz}</p>`
	}
	paragraph.innerHTML = tekstdozadan;
	paragraphodp.innerHTML = tekstodp; 
	var x = window.matchMedia("(max-width: 1022px)")
	if (x.matches) {} 
	else {document.getElementById("przyciskpdf").style.display = 'inline';} 
	document.getElementById("przyciskodpowiedzi").style.display = 'inline';  
}
function getMalaMatura(dzialjson, i) {
	var lista = new Array;
	
	return new Promise((resolve, reject) => {
		fetch(`zadania/${dzialjson}`)
		.then(res => res.json())
		.then(data => {
			zadania = data;
			var j=0;
			for(let k=0;k<zadania.length;k++){
				if(zadania[k].trudnosc.toString() == listatrudnoscimalamatura[i] && zadania[k].czymat == 1){
					lista[j] = zadania[k];
					j+=1;
				}
			}
			listazadan[i] = lista[getRandomInt(0, lista.length-1)];
			//console.log(i+1 +". " + dzialjson + ": " + listazadan[i].temat + " " + listazadan[i].tresc);
			resolve(data);
		});
	});
}
function pokazOdpowiedziMalaMatura(){
	document.getElementById("odpowiedzimalamatura").style.display = 'block'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'none';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'inline';  
}
function ukryjOdpowiedziMalaMatura(){
	document.getElementById("odpowiedzimalamatura").style.display = 'none'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'inline';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'none'; 
}
function zapiszPdfMalaMatura(){
	const styles = "<style>h2{font-family: bahnschrift;font-stretch: condensed;font-size: 15px;border-top: 1px solid #000cbc;margin: auto;width: 100%;text-align:right;color:#000cbc;}</style><style>h4{font-family: bahnschrift;font-stretch: condensed;padding: 0px 0px 0px 0px;font-size: 15px;}</style><style>h5{font-family: bahnschrift;font-stretch: condensed;text-align: right;color: #000cbc;padding: 4px 2px 0px 2px;font-size: 15px;border-bottom: 1px solid #000cbc;}</style><style>p{font-family: bahnschrift;padding: 0px 0px 6px 0px;font-size: 15px;}</style><style>.naglowekmatura{margin-bottom: 5px;margin-top: 10px;background-color:#209cfe;padding:2px 0 0 0px;color:black;font-weight: 600;font-stretch:normal;font-size: 16px;}</style>"
	var mywindow = window.open('', 'PRINT', 'height=600px,width=1000px');
    mywindow.document.write('<html><head><title>' + "Matura365_MalaMatura"  + '</title>' + styles);
    mywindow.document.write('</head><body><h5>Arkusz Maturalny - Mała Matura</h5>');
    mywindow.document.write(document.getElementById("arkusztresc").innerHTML);
	mywindow.document.write("<h2>Wygenerowano w aplikacji Matura365</h2>")
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
    mywindow.close();
}
//#endregion MALA MATURA 


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}