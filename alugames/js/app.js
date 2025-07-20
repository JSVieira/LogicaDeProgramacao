function alterarStatus (id){
  let escolherGame = document.getElementById(`game-${id}`);
  let imagem = escolherGame.querySelector('.dashboard__item__img');
  let botao = escolherGame.querySelector('.dashboard__item__button');
  
  if (imagem.classList.contains('dashboard__item__img--rented')) {
      imagem.classList.remove('dashboard__item__img--rented');
      botao.classList.remove('dashboard__item__button--return');
      botao.textContent = 'Alugar';
  }
  else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
    botao.classList.add('dashboard__item__button--return');
  }
}