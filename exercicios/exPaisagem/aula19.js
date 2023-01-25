//Escreva uma funcao chamada ePaisagem que recebe dois argumentos, 
//largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem

// function ePaisagem (largura, altura){
//     const larguraNum = Number(largura)
//     const alturaNum = Number(altura)
    
// if (!larguraNum || !alturaNum){
//     return 'Largura ou altura não é numero'
// } 
// return (largura > altura)
// }

const ePaisagem = (largura, altura) => largura > altura

console.log(ePaisagem(1000, 200))