var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;


	var pesoEhValido = true;
	var alturaEhValida = true;
	var tdImc = paciente.querySelector(".info-imc");

	if (alturaEhValida && pesoEhValido){
			var imc = calculaImc(peso,altura);
			tdImc.textContent = imc;
			paciente.classList.add("paciente-valido");

		}

	function calculaImc(){
		var imc = 0;
		imc = peso / (altura*altura);
		return imc.toFixed(2);
	}




		if (peso <= 0 || peso >= 1000) {
			console.log("Peso inválido!");
			pesoEhValido = false;
			tdImc.textContent = "Peso inválido!";
			paciente.style.backgroundColor="LightCoral";
		}

		if (altura <= 0 || altura >= 3.00){
		console.log("Altura inválida!");
			alturaEhValida = false;
			tdImc.textContent = "Altura inválida!";
			paciente.classList.add("paciente-invalido");

		}

		


	}

