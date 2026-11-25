function mostrarTela(idTela) {
  document.querySelectorAll('.tela').forEach(function(tela) {
    tela.classList.remove('ativa');
  });
  document.getElementById(idTela).classList.add('ativa');
}

document.getElementById('btnIrDicas').addEventListener('click', function() {
  mostrarTela('tela-dicas');
});

document.getElementById('btnMaisInformacoes').addEventListener('click', function() {
  mostrarTela('tela-mais-informacoes');
});

document.getElementById('btnVoltarDicas').addEventListener('click', function() {
  mostrarTela('tela-inicial');
});

document.getElementById('btnVoltarTabela').addEventListener('click', function() {
  mostrarTela('tela-inicial');
});

document.getElementById('btnEnviar').addEventListener('click', function() {
  const plataforma = document.getElementById('plataforma').value;
  const duvida = document.getElementById('duvida').value.trim();
  const resultadoDiv = document.getElementById('resultado');
  const conteudoResposta = document.getElementById('conteudoResposta');

  if (!plataforma) {
    alert('Por favor, escolha uma plataforma.');
    return;
  }
  if (!duvida) {
    alert('Por favor, digite sua dúvida ou questão.');
    return;
  }

  let respostaDica = '';
  if (plataforma === 'leia') {
    respostaDica = `
      <p><strong> Dica para o Leia Paraná:</strong> Antes de responder às perguntas de interpretação, releia o trecho em que o personagem principal toma uma decisão importante.</p>
      <p><em>Como proceder:</em> Procure no texto as palavras-chave da pergunta e analise o contexto em volta delas para encontrar a resposta por conta própria.</p>
    `;
  } else if (plataforma === 'redacao') {
    respostaDica = `
      <p><strong> Dica para a Redação Paraná:</strong> Lembre-se da estrutura básica: Introdução (apresentar o tema), Desenvolvimento (argumentar com fatos) e Conclusão (proposta de intervenção).</p>
      <p><em>Como proceder:</em> Em vez de pensar no texto todo de uma vez, escreva uma frase por parágrafo respondendo: "O que é?", "Por que acontece?" e "Como resolver?".</p>
    `;
  } else if (plataforma === 'ingles') {
    respostaDica = `
      <p><strong> Dica para o Inglês Paraná:</strong> Foque nas imagens de contexto e nas palavras cognatas (palavras que parecem com o português).</p>
      <p><em>Como proceder:</em> Tente traduzir apenas o verbo principal da frase para entender a ação que está sendo pedida, sem precisar traduzir palavra por palavra.</p>
    `;
  }

  conteudoResposta.innerHTML = respostaDica;
  resultadoDiv.classList.remove('hidden');
});

const STORAGE_KEY = 'apoioMetasInformacoes';
const formTabela = document.getElementById('formTabela');
const corpoTabela = document.getElementById('corpoTabela');

function carregarInformacoes() {
  const salvos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  corpoTabela.innerHTML = '';

  salvos.forEach(function(item, index) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(item.plataforma)}</td>
      <td>${escapeHtml(item.meta)}</td>
      <td>${escapeHtml(item.status)}</td>
      <td><button type="button" class="btn-remover" data-index="${index}">Excluir</button></td>
    `;
    corpoTabela.appendChild(tr);
  });
}

function escapeHtml(texto) {
  const div = document.createElement('div');
  div.textContent = texto;
  return div.innerHTML;
}

formTabela.addEventListener('submit', function(event) {
  event.preventDefault();

  const plataforma = document.getElementById('infoPlataforma').value.trim();
  const meta = document.getElementById('infoMeta').value.trim();
  const status = document.getElementById('infoStatus').value.trim();

  if (!plataforma || !meta || !status) return;

  const salvos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  salvos.push({ plataforma, meta, status });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(salvos));

  formTabela.reset();
  carregarInformacoes();
});

corpoTabela.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-remover')) {
    const index = Number(event.target.getAttribute('data-index'));
    const salvos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    salvos.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(salvos));
    carregarInformacoes();
  }
});

carregarInformacoes();
