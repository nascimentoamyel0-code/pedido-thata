const botaoSim = document.getElementById("sim");
const botaoClaro = document.getElementById("claro");

botaoSim.addEventListener("click", () => {
    alert(
`Então é sim…
E meu coração sorri.
Porque amar você
É tudo o que eu sempre quis.
Agora somos nós,
De mãos dadas, sem fim. 💙💙💙💙💙🤍🤍🤍🤍🤍💚💚💚💚💚🌍🌿🍃🌱🌊🫧🐟🐠🦈`
    );
});

botaoClaro.addEventListener("click", () => {
    alert(
`Claro que sim,
Porque o amor já existe.
Nos seus olhos,
No seu sorriso,
E no meu coração que insiste. 💙💙💙💙💙🤍🤍🤍🤍🤍💚💚💚💚💚🌍🌿🍃🌱🌊🫧🐟🐠🦈`
    );
});

// 💖 CORAÇÕES FLUTUANDO 💖
function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(criarCoracao, 500);
