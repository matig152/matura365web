function pokazBaze(){
	getParametersBaza();
	if (temat.size == 0 || trudnosc.size == 0){
		alert("Wprowadź parametry!");
		return;
	}
	let loader = document.querySelectorAll('.loader')[0];
	loader.style.display = 'grid';
	const select = document.getElementById("dzialy");
	var dzialjson = "";
	//console.log(select.value)
	dzialjson = przypiszdzialjson();
    console.log(dzialjson)
    console.log(temat)
    document.getElementById("instrukcja-test").style.display = 'none';
	document.getElementById("parametry").style.display = 'none';
	document.getElementById("przyciskgeneruj").style.display = 'none';
	const paragraph = document.getElementById("zadaniaSpan");
	const paragraphodp = document.getElementById("odpowiedziSpan");
	var tekstzadan = "";
	var tekstodpowiedzi = "";
	var lista = new Array();
	fetch(`zadania/${dzialjson}.json`)
		.then(res => res.json())
		.then(data => {
			zadania = data;
			//console.log(dzialjson)
			//console.log("Temat:" + temat)
			var j = 0;
			for(let i = 0; i<zadania.length; i++){
				if(temat.has(zadania[i].temat) && trudnosc.has(zadania[i].trudnosc.toString())){
					lista[j] = zadania[i];
					j+=1;					
                }
			}
			
			console.log(lista)
			for(let i = 0; i<lista.length; i++) {
                tekstzadan += `<div class="zadanieBaza"><h5>Temat: ${lista[i].temat}<br>Poziom trudności: ${poziomtrudnoscistring(lista[i].trudnosc)
                }</h5><h4>Zadanie ${i+1}.</h4><p>${lista[i].tresc}</p></div>`;
                tekstodpowiedzi += `<div class="odpowiedzBaza"><h4>Zadanie ${i+1}.</h4><p>${lista[i].odpowiedz}</p></div>`
            }
			paragraph.innerHTML = tekstzadan;
			paragraphodp.innerHTML = tekstodpowiedzi;
			document.getElementById("przyciskodpowiedzi").style.display = 'block';
			paragraph.style.display = 'block'
			loader.style.display = 'none';


		}); 

}


function getParametersBaza(){
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
    const checkboxarray = [document.getElementById("cb11"), document.getElementById("cb22"), document.getElementById("cb33"), document.getElementById("cb44"), document.getElementById("cb55"), document.getElementById("cb66"), document.getElementById("cb77"), document.getElementById("cb88")];
	for(let i = 0; i<listatematow.length;i++){
		if(checkboxarray[i].checked) {
			temat.add(listatematow[i]);
		}
	}
}

function poziomtrudnoscistring(p){
    switch (p){
        case 1: return "łatwy"; 
        case 2: return "średni";
        case 3: return "trudny";
        default: return "średni";
    }
}


function pokazOdpowiedziBaza(){
	document.getElementById("odpowiedziSpan").style.display = 'block'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'none';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'block';   
}
function ukryjOdpowiedziBaza(){
	document.getElementById("odpowiedziSpan").style.display = 'none'; 
	document.getElementById("przyciskodpowiedzi").style.display = 'block';  
	document.getElementById("przyciskodpowiedziukryj").style.display = 'none'; 
}