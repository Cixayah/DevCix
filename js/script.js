function toggleMode() {
    // Seleciona o elemento HTML raiz.
    const html = document.documentElement;
    
    // Alterna a classe 'light' no elemento HTML raiz, mudando o modo.
    html.classList.toggle('light');

    // Seleciona a imagem dentro do elemento com o id "profile".
    const img = document.querySelector("#profile img");

    // Verifica se o modo "light" está ativado.
    if (html.classList.contains('light')) {
        // Se o modo "light" estiver ativo, define a imagem para 'avatar-light.png'.
        img.setAttribute('src', './assets/avatar-light.png');
    } else {
        // Se o modo "light" não estiver ativo, define a imagem para 'avatar.png'.
        img.setAttribute('src', './assets/avatar.png');
    }
}
