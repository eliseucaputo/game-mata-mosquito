
let largura = 0
let altura = 0

function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

let posicaoX = Math.floor(Math.random() * largura) 
let posicaoY = Math.floor(Math.random() * altura) 

console.log(posicaoX, posicaoY)