var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function () {

    
    console.log("cliquei no botao adicionar");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");


    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            console.log(typeof resposta);

            var pacientes = JSON.parse(resposta);
            console.log(pacientes);

            console.log(typeof pacientes);
            console.log(pacientes.length);
            pacientes.forEach(function (paciente) {
                adicionaNaTabela(paciente);
            });
            var erroBuscar = document.querySelector("#erro-buscar");
            erroBuscar.classList.add("invisivel");
        } else {
            var erroBuscar = document.querySelector("#erro-buscar");
            erroBuscar.classList.remove("invisivel");
        }
   

    });
    xhr.send();
});