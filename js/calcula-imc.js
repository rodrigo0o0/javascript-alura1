var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);





for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i].querySelector(".info-peso").textContent);

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (pesoEhValido) {

        tdImc.textContent = "peso inválido!";
        //pacientes[i].style.backgroundColor = "lightcoral";
        pacientes[i].classList.add("paciente-invalido");

    } else if (alturaEhValida) {

        tdImc.textContent = "altura inválida!";
        //pacientes[i].style.backgroundColor = "lightcoral";
        pacientes[i].classList.add("paciente-invalido");

    } else {

        tdImc.textContent = calculaImc(peso,altura);

    }

}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso) {
    return (peso <= 0 || peso >= 1000);
}

function validaAltura(altura) {
    return altura <= 0 || altura >= 3.00;
}


    





console.log("arquivo principal.js importado com sucesso.");


