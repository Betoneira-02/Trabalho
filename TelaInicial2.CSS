/* Variáveis de cor compartilhadas entre a tela inicial e a tela personalizada */
:root {
  --cor-fundo: #0f172a;
  --cor-superficie: #1e293b;
  --cor-texto: #f8fafc;
  --cor-destaque: #38bdf8;
  --cor-destaque-hover: #0284c7;
  --cor-borda: rgba(248, 250, 252, 0.16);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  min-height: 100vh;
}

/* Controle das telas */
.tela {
  display: none;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: var(--cor-fundo);
  padding: 24px;
}

.tela.ativa {
  display: flex;
  flex-direction: column;
}

/* Centralizado horizontalmente e um pouco elevado no eixo vertical */
.conteudo-central {
  margin: auto;
  transform: translateY(-10vh); /* Eleva levemente acima do centro exato */
  text-align: center;
  max-width: 680px;
  padding: 0 16px;
}

.titulo-principal {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 28px;
}

/* Área livre para você adicionar suas informações */
.conteudo-personalizado {
  margin-top: 64px;
  width: 100%;
}

/* Botões */
.btn {
  cursor: pointer;
  border: 1px solid var(--cor-borda);
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--cor-texto);
  background-color: var(--cor-superficie);
  padding: 10px 18px;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.btn:hover {
  background-color: #334155;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primario {
  background-color: var(--cor-destaque);
  color: #082f49;
  border: none;
  padding: 14px 28px;
  font-size: 1.05rem;
}

.btn-primario:hover {
  background-color: var(--cor-destaque-hover);
  color: #ffffff;
}

/* Posicionamento nos cantos superiores */
.btn-topo-direito {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
}

.btn-topo-esquerdo {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
}