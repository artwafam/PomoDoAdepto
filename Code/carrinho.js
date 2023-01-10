// Obter todos os botões "Adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Adicionar um evento de clique a cada botão "Adicionar ao carrinho"
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Obter a planta relacionada ao botão que foi clicado
    const plantaElement = button.closest('.planta');
    const nomePlanta = plantaElement.querySelector('h3').textContent;

    // Adicionar a planta ao carrinho (aqui você pode usar um array para armazenar as plantas do carrinho ou fazer uma chamada a uma API para salvar as informações)
    console.log(`${nomePlanta} foi adicionada ao carrinho.`);
  });
});
