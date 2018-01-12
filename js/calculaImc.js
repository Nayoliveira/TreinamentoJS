var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    var tdImc = paciente.querySelector(".info-imc");

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
        paciente.classList.add("paciente-valido");

    }

    function calculaImc() {
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    if (!pesoEhValido) {
        if (peso <= 0 || peso >= 1000) {
            console.log("Peso inválido!");
            pesoEhValido = false;
            tdImc.textContent = "Peso inválido!";
            paciente.style.backgroundColor = "LightCoral";
        }
    }

    if (!alturaEhValida) {
        if (altura <= 0 || altura >= 3.00) {
            console.log("Altura inválida!");
            alturaEhValida = false;
            tdImc.textContent = "Altura inválida!";
            paciente.classList.add("paciente-invalido");
        }
    }

}
	function validaPeso(peso) {
		if(peso >= 0 && peso < 1000){
			return true;
		}
		else{
			return false;
		}
	}
	function validaAltura(altura) {
		if(altura >= 0 && altura < 1000){
			return true;
		}
		else{
			return false;
	}
}

