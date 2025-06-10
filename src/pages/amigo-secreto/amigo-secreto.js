const inputAmigo = document.getElementById('nome-amigo');
const listaAmigosHTML = document.getElementById('lista-amigos');
const listaSorteioHTML = document.getElementById('lista-sorteio');
let listaAmigos = [];

function adicionar() {
    const amigo = inputAmigo.value.trim();

    if (amigo === '') {
        alert('Por favor, digite um nome para adicionar!');
        return;
    }

    if (listaAmigos.includes(amigo)) {
        alert('Este amigo já foi adicionado à lista!');
        return;
    }

    listaAmigos.push(amigo);
    atualizaListaAmigosHTML();
    inputAmigo.value = '';

    listaSorteioHTML.innerHTML = '';
}

function atualizaListaAmigosHTML() {
    listaAmigosHTML.innerText = listaAmigos;
}

function reiniciar() {
    listaAmigos = [];
    inputAmigo.value = '';
    listaAmigosHTML.innerText = '';
}

function sortear() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos!');
        return;
    }

    let amigosEmbaralhados = [...listaAmigos];

    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    let resultado = '';
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        let amigo = amigosEmbaralhados[i];
        let amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
        resultado += `${amigo} → ${amigoSecreto}\n`;
    }
    exibeResultadoDoSorteio(resultado);
}

function exibeResultadoDoSorteio(sorteados) {
    listaSorteioHTML.innerText = sorteados;
}