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
    
    function setResultado(msg, cor){
        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = ''
        const p = criaP()
        if(cor){
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add('bad')
        }
        
        p.innerHTML = msg
        resultado.appendChild(p)
    }

    function calcularIMC(peso, altura){
        if (!peso) {
            setResultado(`Peso inválido`, false)
        } else if (!altura) {
            setResultado(`Altura inválida`, false)
        } else {
            const imc = peso / (altura * altura)
            if (imc < 18.5) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Abaixo do peso).`, true)
            } else if (imc <= 24.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Peso normal).`, true)
            } else if (imc <= 29.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Sobrepeso).`, true)
            } else if (imc <= 34.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1).`, true)
            } else if (imc <= 39.9) {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2).`, true)
            } else {
                setResultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3).`, true)
            }
        }
    }

}
meuEscopo()




