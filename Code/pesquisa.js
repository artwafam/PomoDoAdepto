// Obter a referência para o input da pesquisa e o elemento que exibe as plantas
const searchInput = document.querySelector('#search-input');
const plantasElement = document.querySelector('.plantas');

// Adicionar um evento de "input" ao input da pesquisa para atualizar a lista de plantas conforme o usuário digita
searchInput.addEventListener('input', () => {
  // Obter o valor do input da pesquisa
  const searchValue = searchInput.value.toLowerCase();

  // Obter todos os elementos de planta
  const plantas = plantasElement.querySelectorAll('.planta');

  // Mostrar todas as plantas novamente (caso elas tenham sido ocultadas por uma pesquisa anterior)
  plantas.forEach((planta) => {
    planta.style.display = 'block';
  });

  // Ocultar as plantas que não combinam com o valor da pesquisa
  plantas.forEach((planta) => {
    const nomePlanta = planta.querySelector('h3').textContent.toLowerCase();
    if (!nomePlanta.includes(searchValue)) {
      planta.style.display = 'none';
    }
  });
});
