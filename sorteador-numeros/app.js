
  let btnReiniciarEnabled = false

function sortear (){
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Preenchimento dos campos é obrigatório</label>`;
    return
  }

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    console.log (quantidade)
    
    while (sorteados.includes(numero)) {
     numero = obterNumeroAleatorio(de, ate); 
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  if (btnReiniciarEnabled == false){
    btnReiniciarEnabled = true
    alterarStatusBotao();
  }
}

function obterNumeroAleatorio(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (btnReiniciarEnabled){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  }
  else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
  btnReiniciarEnabled = false
  alterarStatusBotao();
}