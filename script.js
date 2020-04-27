function validaCampos(){
    var nome = $("#nome").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var mensagem = $("#mensagem").val();

    if(nome == ""){
        $("#svazio1").css("color","red");
        $("#svazio1").html("Digite seu nome");
        return false;
    }
    else if(email == ""){
        $("#svazio2").css("color","red");
        $("#svazio2").html("Digite seu email");
        return false;
    }
    else if(telefone == ""){
        $("#svazio3").css("color","red");
        $("#svazio3").html("Digite seu telefone");
        return false;
    }
    else if(mensagem == ""){
        $("#svazio4").css("color","red");
        $("#svazio4").html("Digite uma mensagem");
        return false;
    }
    else{
        return true;
    }
}