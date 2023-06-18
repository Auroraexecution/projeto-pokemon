const botaoAlterar = document.getElementById("botao-alterar")

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterar.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    console.log("Modo escuro está ativo")
    body.classList.toggle("modo-escuro")
    if(modoEscuroAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/Imagenspok/sun.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/Imagenspok/moon.png")
    }
})
