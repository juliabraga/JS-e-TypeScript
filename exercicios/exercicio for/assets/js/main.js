const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const pagina = document.querySelector('.container')

for (let i = 0;i<elementos.length; i++){
    let {tag, texto} = elementos[i]
    const tagCriada = document.createElement(tag)
    tagCriada.innerText = elementos[i].texto
    pagina.appendChild(tagCriada)   
}