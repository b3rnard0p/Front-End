function calcularAreaTrianguloEquilatero(lado) {
    const altura = (Math.sqrt(3) / 2) * lado;
    const area = (lado * altura) / 2;
    return area;
  }
  
  const ladoTriangulo = parseFloat(prompt("Digite o comprimento do lado do triângulo equilátero:"));
  const areaTriangulo = calcularAreaTrianguloEquilatero(ladoTriangulo);
  alert("A área do triângulo equilátero é: " + areaTriangulo);
  