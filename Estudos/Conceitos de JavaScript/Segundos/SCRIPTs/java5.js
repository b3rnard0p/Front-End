function botao() {
    var caixas = document.querySelectorAll('input[type="checkbox"]');
    var verificacao = 0;
    
    for (var i = 0; i < caixas.length; i++) {
        if (caixas[i].checked) {
            verificacao++;
        }
    }
    
    var botao = document.getElementById('submitButton');
    botao.disabled = verificacao < 2;
}