function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }    
    //Pra realização desse procedimento de "tirar" e "por" no dark mode ou light mode, podemos
    //utilizar a função toggle conforme abaixo. A linha de código abaixo realiza o mesmo procedimento codado acima.

    //html.classList.toggle("light")

    //Pegando imagem
    const img = document.querySelector("#profile img")
    
    //substituindo a img
    if(html.classList.contains("light")) {
        //Se estiver no light, adicionar a imagem light
        img.setAttribute("src","./assets/avatar-light.png")
    } else {
        //Se estiver no dark mode, manter a imagem normal
        img.setAttribute("src","./assets/avatar.png")
    }

}