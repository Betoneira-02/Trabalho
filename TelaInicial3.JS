const telaInicial = document.getElementById("tela-inicial");
const telaSaberMais = document.getElementById("tela-saber-mais");
const telaPreExistente = document.getElementById("tela-pre-existente");

const btnPedirDicas = document.getElementById("btn-pedir-dicas");
const btnSaberMais = document.getElementById("btn-saber-mais");
const btnVoltar = document.getElementById("btn-voltar");

function mostrarTela(telaAlvo) {
  [telaInicial, telaSaberMais, telaPreExistente].forEach((tela) => {
    if (!tela) return;
    tela.classList.add("oculta");
    tela.classList.remove("ativa");
  });

  if (telaAlvo) {
    telaAlvo.classList.remove("oculta");
    telaAlvo.classList.add("ativa");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  mostrarTela(telaInicial);
});

btnPedirDicas.addEventListener("click", () => {
  mostrarTela(telaPreExistente);
});

btnSaberMais.addEventListener("click", () => {
  mostrarTela(telaSaberMais);
});

btnVoltar.addEventListener("click", () => {
  mostrarTela(telaInicial);
});