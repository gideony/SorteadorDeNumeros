const botaoSotear = document.querySelector("div.box button");
var numeroSorteado = document.querySelector("div.box h1");
var roleta = [];

for (i = 0; i <= 50; i++) {
  roleta.push(i);
}

botaoSotear.addEventListener("click", () => {
  numeroSorteado.innerHTML =
    "O Número Sorteado é " + roleta[Math.floor(Math.random() * roleta.length)];
});
