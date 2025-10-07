function criarCampos() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const numerosInput = document.getElementById('numerosInput');
    const calcularBtn = document.getElementById('calcularBtn');
  
    numerosInput.innerHTML = ''; // Limpa campos anteriores
  
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Por favor, insira um número válido.");
      return;
    }
  
    for (let i = 0; i < quantidade; i++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.placeholder = `Número ${i + 1}`;
      input.className = 'numero';
      numerosInput.appendChild(input);
    }
  
    calcularBtn.style.display = 'block';
  }
  
  function calcular() {
    const inputs = document.querySelectorAll('.numero');
    const numeros = [];
    let soma = 0;
  
    for (let input of inputs) {
      const valor = parseFloat(input.value);
      if (isNaN(valor)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
      }
      numeros.push(valor);
      soma += valor;
    }
  
    const n = numeros.length;
    const media = soma / n;
  
    let somatorio = 0;
    for (let i = 0; i < n; i++) {
      somatorio += Math.pow(numeros[i] - media, 2);
    }
  
    const desvioPadrao = Math.sqrt(somatorio / (n - 1)); // Desvio amostral
  
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      Média: ${media.toFixed(2)} <br>
      Desvio Padrão: ${desvioPadrao.toFixed(2)}
    `;
  }
  