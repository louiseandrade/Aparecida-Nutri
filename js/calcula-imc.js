var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        console.log("Peso Inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido"); // classList.add vai adicionar um classe no HTML//
    }

    if (!alturaEhValida) {
        console.log("Altura Inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
        
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2); // limita a impresao do mumero em casas decimais//;

}
