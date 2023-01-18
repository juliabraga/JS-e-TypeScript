const numero = Number(prompt('Digite um número'))
const textoNumero = document.getElementById('numero-digitado')
const texto = document.getElementById('texto')

textoNumero.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada do número é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>O número arrendado pra cima é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>O número arrendado pra baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>O número é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>O número é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>O número com duas casas decimais é ${numero.toFixed(2)}</p>`