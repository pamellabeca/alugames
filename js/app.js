function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let divDaImagem = jogoClicado.querySelector('.dashboard__item__img');
    let botaoStatusDoJogo = jogoClicado.querySelector('.dashboard__item__button');

    if (divDaImagem.classList.contains('dashboard__item__img--rented')){
        divDaImagem.classList.remove('dashboard__item__img--rented');

        botaoStatusDoJogo.innerHTML = 'Alugar';

        botaoStatusDoJogo.classList.remove('dashboard__item__button--return');

    } else{
        divDaImagem.classList.add('dashboard__item__img--rented');

        botaoStatusDoJogo.innerHTML = 'Devolver';

        botaoStatusDoJogo.classList.add('dashboard__item__button--return');
    }
}