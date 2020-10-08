var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");  

        //Extraindo informações do paciente no form
    var paciente = obtemPacienteDoForm(form);

        // Cria a Tr e Td do paciente
    var pacienteTr = montaTr(paciente);

    var erro = validaPaciente(paciente);

    if(erro.length > 0){
      var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erro;
      return;
    }

        //Adiciona novo paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    form.reset();

});

function obtemPacienteDoForm(form){
    
   var paciente = {
       nome: form.nome.value,
       peso: form.peso.value,
       altura: form.altura.value,
       gordura: form.gordura.value,
       imc: calculaImc(form.peso.value, form.altura.value)
   }

    return paciente;
} 


function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)) {
        return "";
    } else {
        return "O peso é inválido!";
    }
}
   