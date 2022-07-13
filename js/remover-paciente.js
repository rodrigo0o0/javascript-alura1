var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    //pega o alvo do evento
    var alvoEvento = event.target;
    //pega o pai do alvo a linha tr
    var paiDoAlvo = alvoEvento.parentNode;
    //efeito de tirar opacidade
    paiDoAlvo.classList.add("fadeOut");
    //timeout para a animação
    setTimeout(function () {
        //remove o pai do evento
        paiDoAlvo.remove();
    },550);
    
    
    

});





/**pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function (paciente) {
        console.log("Fui clicado");
        var tabelaPacientes = document.querySelector("#tabela-pacientes");
        
        console.log(paciente);
        this.remove();
    });

});
*/
