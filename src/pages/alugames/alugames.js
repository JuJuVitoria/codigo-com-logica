function alterarStatus(id) {
    const jogo = document.getElementById(`game-${id}`)
    const capaJogo = jogo.querySelector('[data-role="cover"]');
    const btn = jogo.querySelector('[data-role="action-button"]');

    const alugado = "dashboard__item__img--rented";
    const devolver = "dashboard__item__button--return";

    let estaAlugado = jogo.dataset.status === "rented";

    if (!estaAlugado) {
        capaJogo.classList.add(alugado);
        btn.classList.add(devolver);
        btn.textContent = "Devolver"
        jogo.dataset.status = "rented";
    } else {
        capaJogo.classList.remove(alugado);
        btn.classList.remove(devolver);
        btn.textContent = "Alugar"
        jogo.dataset.status = "available";
    }
} 