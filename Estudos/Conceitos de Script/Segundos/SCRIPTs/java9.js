function validateForm() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    
    if (login === '' || senha === '' || confirmarSenha === '') {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    if (senha !== confirmarSenha) {
        alert("A senha e a confirmação de senha não coincidem.");
        return false;
    }

    if (senha.length < 6 || senha.length > 10) {
        alert("A senha deve ter entre 6 e 10 caracteres.");
        return false;
    }

    return true;
}