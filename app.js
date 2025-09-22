let listaAmigos = [];
let ul = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let entrada = document.getElementById('amigo').value;

    if (entrada === '') {
        alert('Insira um nome, por favor!');
        return;
    }

    listaAmigos.push(entrada);

    let li = document.createElement('li');
    li.textContent = entrada;
    ul.appendChild(li);

    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Impossivel sortear, adicione pelo menos um nome.");
        return;
    }

    let sorteio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[sorteio];

    document.getElementById("resultado").textContent = 
        `Seu amigo secreto é: ${amigoSorteado}!`;
}
