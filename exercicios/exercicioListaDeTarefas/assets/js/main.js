function listaDeTarefas() {
    const lista = []

    const entrada = document.querySelector('.entrada')
    const btnEntrada = document.querySelector('.btnCriar')
    const saida = document.querySelector('.listaCriada')
    entrada.focus()

    function criaTarefa(tarefaNova){
        lista.push(tarefaNova)
        entrada.value = ''
        criaLista(lista)
        salvarTarefas()
    }

    //ao clicar no botao chama a funcao q cria a tarefa
    btnEntrada.addEventListener('click', function () {
        if(!entrada.value) return
        criaTarefa(entrada.value)
    })
    //usa a tecla Enter para ativar a mesma funcao do clique no botão
    entrada.addEventListener('keypress', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            btnEntrada.click()
        }
    })

    function criaLista(lista) {
        saida.innerHTML = ''
        for (itens of lista) {
            saida.innerHTML += `<li>${itens} <button class="btnApagar">Apagar</button> </li>`
        }
        apagaItem()
    }


    function apagaItem() {
        if (lista.length !== 0) {
            const btnApagar = document.querySelectorAll('.btnApagar')
            for (const [i, v] of btnApagar.entries()) {
                v.addEventListener('click', function (e) {
                    lista.splice(i, 1)
                    criaLista(lista)
                    salvarTarefas()
                })
            }
        }
    }

    function salvarTarefas(){
        const tarefasCriadas = saida.querySelectorAll('li')
        const listaCriada = []

        for (tarefas of tarefasCriadas){
            let tarefaTexto = tarefas.innerText
            tarefaTexto = tarefaTexto.replace(' Apagar', '')
            listaCriada.push(tarefaTexto)
        }
        const tarefasJSON = JSON.stringify(listaCriada)
        localStorage.setItem('tarefas', tarefasJSON)
    }

    function adicionaTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas')
        const lista = JSON.parse(tarefas)
        
        for (let tarefa of lista){
            criaTarefa(tarefa)
        }
    }
    adicionaTarefasSalvas()
}

listaDeTarefas()