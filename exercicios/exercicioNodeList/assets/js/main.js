const divParagrafos = document.querySelector('.paragrafos')
const paragrafos = divParagrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundBody = estilosBody.backgroundColor
console.log(backgroundBody)

for (ps of paragrafos){
    ps.style.backgroundColor = backgroundBody
    ps.style.color =  '#FFFFFF'
}