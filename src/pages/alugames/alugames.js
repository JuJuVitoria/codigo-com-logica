function alterarStatus(id) {
    const jogo = document.getElementById(`game-${id}`)
    const capaJogo = jogo.querySelector("div");
    const btn = jogo.querySelector("a");

    if (!capaJogo.classList.contains("dashboard__item__img--rented")) {
        capaJogo.classList.add("dashboard__item__img--rented");
        btn.classList.add("dashboard__item__button--return");
    } else {
        capaJogo.classList.remove("dashboard__item__img--rented");
        btn.classList.remove("dashboard__item__button--return");
    }
} 