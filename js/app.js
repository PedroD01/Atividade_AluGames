function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let botao = game.querySelector('.dashboard__item__button');
    let imagem = game.querySelector('.dashboard__item__img');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        let confirm = prompt("Você deseja devolver o jogo ?").toLowerCase();

        if(confirm == 'sim'){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = "Alugar";
        }
    }
    else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = "Devolver";
    }
}