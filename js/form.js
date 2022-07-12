var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cliquei no botao");
    adicionaPaciente();

});


function adicionaPaciente() {
    //recuperando dados
    var form = document.querySelector("#form-adiciona");
    paciente = obtemDadosFormulario(form);
    console.log(paciente);


    //criando elemento TR 

    montaTR(paciente);

    form.reset();

}


function obtemDadosFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTR(paciente) {
    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(montaTD(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc, "info-imc"));

    var pacienteTBODY = document.querySelector("#tabela-pacientes");
    pacienteTBODY.appendChild(pacienteTR);
}

function montaTD(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

console.log("arquivo form.js importado com sucesso.");
