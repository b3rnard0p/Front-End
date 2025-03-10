function operacoesMatematicas(num1, num2, operacao) {
    var resultado;
  
    switch (operacao) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      default:
        alert("Operação inválida!");
        return;
    }
  
    alert("Resultado: " + resultado);
  }
  
  var numero1 = parseFloat(prompt("Digite o primeiro número:"));
  var numero2 = parseFloat(prompt("Digite o segundo número:"));
  var operacao = prompt("Digite a operação desejada (+, -, *, /):");
  
  operacoesMatematicas(numero1, numero2, operacao);
  