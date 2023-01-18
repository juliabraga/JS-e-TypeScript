function meuEscopo() {
    const form = document.querySelector('#form');
    

    form.addEventListener('submit', function (e){
        e.preventDefault();
        const peso = Number(document.querySelector('#input-peso').value)
        const altura = Number(document.querySelector('#input-altura').value)
        calcularIMC(peso, altura)
    })

    function criaP(){
        const p = document.createElement('p')
        return p
    }
    
    function setResultado(msg){
        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = ''
        const p = criaP()
        p.classList.add('paragrafo-resultado')
        p.innerHTML = msg
        resultado.appendChild(p)
    }

    function calcularIMC(peso, altura){
        if (peso === 0 || Number.isNaN(peso)) {
            setResultado(`Peso inválido`)
        } else if (altura === 0 || Number.isNaN(altura)) {
            setResultado(`Altura inválida`)
        } else {
            const imc = peso / (altura * altura)
            if (imc < 18.5) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Abaixo do peso).`)
            } else if (imc <= 24.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Peso normal).`)
            } else if (imc <= 29.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Sobrepeso).`)
            } else if (imc <= 34.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1).`)
            } else if (imc <= 39.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2).`)
            } else {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3).`)
            }
        }
    }

}
meuEscopo()




