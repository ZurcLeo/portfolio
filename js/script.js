document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links da navegação que apontam para seções internas
    const navLinks = document.querySelectorAll('nav ul li a');

    // Adiciona um listener de clique a cada link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            // Obtém o ID da seção alvo (ex: '#sobre')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Verifica se a seção alvo existe
            if (targetSection) {
                // Rola suavemente até a seção
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Ajusta pela altura do cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});