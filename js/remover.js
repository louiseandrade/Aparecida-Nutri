var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   /* var alvoEvento = event.target; // vai trazer apenas o evento que foi clicado
    var paiDoAlvo = alvoEvento.parentNode; //vai remover o pai do evento que foi clicado neste caso a TR */

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){ //pede para esperar para realizar a função
        event.target.parentNode.remove();
    },500);
  
})