function fonte() {
    var paragrafo = document.getElementById("paragrafo");
    var corta = window.getComputedStyle(paragrafo).color;
    var cor = (corta === 'rgb(255, 255, 255)') ? 'black' : 'white';
    paragrafo.style.color = cor;
}

function fundo() {
    var paragrafo = document.getElementById("paragrafo");
    var corta = window.getComputedStyle(paragrafo).backgroundColor;
    var cor = (corta === 'rgb(0, 0, 0)') ? 'white' : 'black';
    paragrafo.style.backgroundColor = cor;
}

function aumentar() {
    var paragrafo = document.getElementById("paragrafo");
    var fonteta = parseInt(window.getComputedStyle(paragrafo).fontSize);
    var fonte = fonteta + 2;
    paragrafo.style.fontSize = fonte + 'px';
}

function diminuir() {
    var paragrafo = document.getElementById("paragrafo");
    var fonteta = parseInt(window.getComputedStyle(paragrafo).fontSize);
    var fonte = fonteta - 2;
    paragrafo.style.fontSize = fonte + 'px';
}

function maiuscula() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = paragrafo.textContent.toUpperCase();
}

function minuscula() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = paragrafo.textContent.toLowerCase();
}