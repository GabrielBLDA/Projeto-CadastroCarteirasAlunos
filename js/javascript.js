
function CadastrarClasse(){
	let recuperar = document.getElementById('menu')

	recuperar.style.top = "150px";
}

function EsconderClasse(){
	let recuperar = document.getElementById('menu')

	recuperar.style.top = "-800px";
}

function ApagarClasse(){
	document.getElementById('base').remove();	
}

function CriarClasse(){
	let i = 0;
	let resgatarValor = document.getElementById('texto')
	let resposta = resgatarValor.value

	if (resposta >= 10 &&  resposta <= 16) {

		let header = document.createElement("header");
			header.classList.add('container');
			header.classList.add('mt-4');
			header.setAttribute("id", "base");
			
		let row = document.createElement("div");
			row.classList.add('row');
			header.appendChild(row);	

		do{

			let div1 = document.createElement("div");
			div1.classList.add('col-md-3');
			

			row.appendChild(div1);

			let div2 = document.createElement("div");
			div2.classList.add('FClass');
			div2.addEventListener("click", function() {
				let recuperar = document.getElementById('menu');
				recuperar.style.top = "200px";
			})
			
			div1.appendChild(div2);

			let center = document.createElement("center");

			div2.appendChild(center);

			let div3 = document.createElement("i");
			div3.classList.add("fa-solid");
			div3.classList.add("fa-user-graduate");
			div3.classList.add("fa-4x");

			center.appendChild(div3);
			i++;
		} while (i < resposta)	
		document.body.appendChild(header);
		}


		else if (resposta >= 7 && resposta <= 9) {

		let header = document.createElement("header");
			header.classList.add('container');
			header.classList.add('mt-4');
			header.setAttribute("id", "base");

		let row = document.createElement("div");
			row.classList.add('row');
			row.classList.add('class9')
			header.appendChild(row);	

		do{

			let div1 = document.createElement("div");
			div1.classList.add('col-md-4');


			row.appendChild(div1);

			let div2 = document.createElement("div");
			div2.classList.add('FClass');
			div2.classList.add('cadeiras9');
			div2.addEventListener("click", function() {
				let recuperar = document.getElementById('menu');
				recuperar.style.top = "200px";
			})

			div1.appendChild(div2);

			let center = document.createElement("center");

			div2.appendChild(center);

			let div3 = document.createElement("i");
			div3.classList.add("fa-solid");
			div3.classList.add("fa-user-graduate");
			div3.classList.add("fa-4x");

			center.appendChild(div3);
			i++;
		} while (i < resposta)	

		document.body.appendChild(header);
		}

		else if (resposta >= 3 && resposta <= 6 ) {

		let header = document.createElement("header");
			header.classList.add('container');
			header.classList.add('mt-4');
			header.setAttribute("id", "base");

		let row = document.createElement("div");
			row.classList.add('row');
			row.classList.add('class9')
			header.appendChild(row);	

		do{

			let div1 = document.createElement("div");
			div1.classList.add('col-md-6');


			row.appendChild(div1);

			let div2 = document.createElement("div");
			div2.classList.add('FClassTeste');
			div2.classList.add('cadeiras9');
			div2.addEventListener("click", function() {
				let recuperar = document.getElementById('menu');
				recuperar.style.top = "200px";
			})

			div1.appendChild(div2);

			let center = document.createElement("center");

			div2.appendChild(center);

			let div3 = document.createElement("i");
			div3.classList.add("fa-solid");
			div3.classList.add("fa-user-graduate");
			div3.classList.add("fa-4x");
			div3.classList.add("icone2")

			center.appendChild(div3);
			i++;
		} while (i < resposta)	

		document.body.appendChild(header);
		}


		else if (resposta >= 1 && resposta <= 2 ) {

		let header = document.createElement("header");
			header.classList.add('container');
			header.classList.add('mt-4');
			header.setAttribute("id", "base");

		let row = document.createElement("div");
			row.classList.add('row');
			row.classList.add('class9')
			header.appendChild(row);	

		do{

			let div1 = document.createElement("div");
			div1.classList.add('col-md-6');


			row.appendChild(div1);

			let div2 = document.createElement("div");
			div2.classList.add('FClass1e2');
			div2.classList.add('cadeiras2');
			div2.addEventListener("click", function() {
				let recuperar = document.getElementById('menu');
				recuperar.style.top = "200px";
			})

			div1.appendChild(div2);

			let center = document.createElement("center");

			div2.appendChild(center);

			let div3 = document.createElement("i");
			div3.classList.add("fa-solid");
			div3.classList.add("fa-user-graduate");
			div3.classList.add("fa-5x");
			div3.classList.add("icone3")

			center.appendChild(div3);
			i++;
		} while (i < resposta)	

		document.body.appendChild(header);
		}  else {
			alert('Quantidade indisponivel')
		}
}





