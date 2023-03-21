const calcular = document.getElementById("calcular");
const nutri = document.querySelector("#nutri");

function insta (){
  
}

function imc (){
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");
  const input = document.getElementById("input");
  const calcular = document.getElementById("calcular");
  const botaoaltura = document.getElementById("altura");
  const botaopeso = document.getElementById("peso");
  const alturanome = document.getElementById("alturanome");
  const pesonome = document.getElementById("pesonome");
  const recalcular = document.getElementById("recalcular");

  if (nome !== '' && altura !== '' && peso !== '') {
    
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC < 18.5){
      classificacao = 'abaixo do peso!';
    } else if (valorIMC < 25){
      classificacao = 'no peso ideal!';
    } else if (valorIMC < 30){
      classificacao = 'acima do peso!';
    } else if (valorIMC < 35){
      classificacao = 'em obesidade grau I...';
    } else if (valorIMC < 40){
      classificacao = 'em obesidade grau II...';
    } else{
      classificacao = 'em obesidade grau III... Cuidado!';
    }

    resultado.textContent = (nome + ', seu resultado é ' + valorIMC + ' e você está ' + classificacao);

    nutri.classList.remove("hide");
    recalcular.classList.remove("hide");
    resultado.classList.remove("hide");
    input.classList.add("hide");
    botaoaltura.classList.add("hide");
    botaopeso.classList.add("hide");
    calcular.classList.add("hide");
    alturanome.classList.add("hide");
    pesonome.classList.add("hide");
    
    
  }else{
    resultado.textContent = 'Preencha todos os campos!'
  }
}

calcular.addEventListener("click", imc);