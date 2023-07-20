function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/guilherme-light.png")
    img.setAttribute("alt", "Foto de Guilherme dos Santos sorrindo")
  }else{
    img.setAttribute("src", "./assets/guilherme.png")
    img.setAttribute("alt", "Foto de Guilherme dos Santos sério")
  }

}