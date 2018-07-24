function Enviar() {

    var nome  = document.getElementById("nome");

    if (nome.value && sobrenome.value && email.value != ""){

        alert("Obrigado Sr(a). "+ nome.value + ", o seus dados foram salvos com sucesso! ");
    }
    else{
        alert("Preencha os campos vazios")
    }
}