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

    var pacienteEhValido = validaPaciente(paciente);
    if (pacienteEhValido.length == 0) {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        montaTR(paciente);
        form.reset();
    } else {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        exibeMensagensDeErro(pacienteEhValido);

        
    }


    

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
function validaPaciente(paciente) {
    var mensagemErro = [];
    if (validaPeso(paciente.peso)) {
        mensagemErro.push("Peso Inválido!");
    }
    if (validaAltura(paciente.altura)) {
        mensagemErro.push("Altura Inválida!");
    }
    if (paciente.nome.length <= 0) {
        mensagemErro.push("Nome Inválido!");
    }
    if (paciente.gordura <= 0 || paciente.gordura >= 100 || paciente.gordura == "") {
        mensagemErro.push("Percentual de gordura inválido.");
    }
    return mensagemErro;
    
}
function exibeMensagensDeErro(mensagensDeErro = []) {
    var ul = document.querySelector("#mensagens-erro");
    mensagensDeErro.forEach(function (texto) {
        var li = document.createElement("li");
        li.classList.add("#mensagens-erro");
        li.textContent = texto;
        ul.appendChild(li);
    });

}

console.log("arquivo form.js importado com sucesso.");
