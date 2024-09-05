function showHideFields() {
    var pessoaFisica = document.getElementById("pessoaFisica");
    var cpfField = document.getElementById("cpfField");
    var cnpjField = document.getElementById("cnpjField");
    var dataNascimentoField = document.getElementById("dataNascimentoField");

    cpfField.style.display = pessoaFisica.checked ? "block" : "none";
    cnpjField.style.display = pessoaFisica.checked ? "none" : "block";
    dataNascimentoField.style.display = pessoaFisica.checked ? "block" : "none";
}

function numero(input) {
    input.value = input.value.replace(/\D/g, '');
}

function validar() {
    var pessoaFisica = document.getElementById("pessoaFisica");
    var cpf = document.getElementById("cpf").value;
    var cnpj = document.getElementById("cnpj").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var cep = document.getElementById("cep").value;

    if (pessoaFisica.checked) {
        if (cpf === '') {
            alert("Por favor, preencha o CPF.");
            return false;
        }
        if (cpf.length !== 11) {
            alert("O CPF deve ter 11 dígitos numéricos.");
            return false;
        }
    } else {
        if (cnpj === '') {
            alert("Por favor, preencha o CNPJ.");
            return false;
        }
        if (cnpj.length !== 14) {
            alert("O CNPJ deve ter 14 dígitos numéricos.");
            return false;
        }
    }

    if (dataNascimento === '' && pessoaFisica.checked) {
        alert("Por favor, preencha a Data de Nascimento.");
        return false;
    }

    if (cep === '') {
        alert("Por favor, preencha o CEP.");
        return false;
    }

    return true;
}