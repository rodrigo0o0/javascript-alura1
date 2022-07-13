var filtrarTabela = document.querySelector("#filtrar-tabela");

filtrarTabela.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var nomeTD = pacientes[i].querySelector(".info-nome");
            var nome = nomeTD.textContent;

            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {
                pacientes[i].classList.add("invisivel");
                console.log("fica invisivel " + nome)
            } else {
                pacientes[i].classList.remove("invisivel");
                console.log("fica visível " + nome)
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            pacientes[i].classList.remove("invisivel");
        }
    }
   
});