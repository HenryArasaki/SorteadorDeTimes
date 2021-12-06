const textArea = document.getElementById('players')
const app = document.getElementById("app")
const btn = document.getElementById("btn")
const label = document.getElementById("label")
const resultados = document.getElementById("resultados")

let time1Lista = [] 
let time2Lista= []

function sortearTimes(){
    label.innerHTML=""
    const playersList = textArea.value.split("\n")
    const newPlayerList = playersList.filter(a => a !=='')
    const listaShufflada = newPlayerList.sort((a,b)=>0.5- Math.random())

    textArea.remove()

    //se for numero par ou impar de jogadores

    for (let i=0;i<listaShufflada.length/2;i++){
        time1Lista.push(listaShufflada[i])
    }

    for (let i=listaShufflada.length/2;i<listaShufflada.length;i++){
        time2Lista.push(listaShufflada[i])
    }
    time1 = document.createElement('div')
    time1.classList.add('times')

    time1Titulo = document.createElement('p')
    time1Titulo.innerText = 'Time 1'
    time1Titulo.classList.add('timeTitulo')
    time1.append(time1Titulo)

    time1ul = document.createElement("ul")
    time1ul.setAttribute('id','time1')
    time1ul.classList.add('ul')
    time1.append(time1ul)
    time1Lista.forEach(element=>{
        const jogador = document.createElement("li")
        jogador.classList.add('li')
        jogador.innerText=element
        time1ul.append(jogador)
    })
    time1.append(time1ul)
    
    
    time2 = document.createElement('div')
    time2.classList.add('times')
    time2Titulo = document.createElement('p')
    time2Titulo.innerText = 'Time 2'
    time2Titulo.classList.add('timeTitulo')
    time2.append(time2Titulo)
    time2ul = document.createElement("ul")
    time2ul.setAttribute('id','time2')
    time2ul.classList.add('ul')
    time2Lista.forEach(element=>{
        const jogador = document.createElement("li")
        jogador.classList.add('li')
        jogador.innerText=element
        time2ul.append(jogador)
    })
    time2.append(time2ul)

    resultados.append(time1)
    resultados.append(time2)
    
    btn.innerText="Sortear Roles"
    btn.setAttribute("onClick","sortearRoles()")

}

function sortearRoles(){
    time1ul.innerHTML=""
    time2ul.innerHTML=""


    time1Lista.sort((a,b)=>0.5- Math.random())
    time2Lista.sort((a,b)=>0.5- Math.random())

    time1ul = document.getElementById('time1')
    time2ul = document.getElementById('time2')


    let temp = 1
    time1Lista.forEach(element=>{
        const jogador = document.createElement("li")
        jogador.classList.add('li')
        switch (temp){
            case 1:
                role= ' - Top'
                break
            case 2:
                role= ' - Jungle'
                break
            case 3:
                role=  ' - Mid'
                break
            case 4:
                role=  ' - ADC'
                break
            case 5:
                role=  ' - Sup'
        }

        jogador.innerText=element + role
        time1ul.append(jogador)
        temp++
    })

    temp = 1

    time2Lista.forEach(element=>{
        const jogador = document.createElement("li")
        jogador.classList.add('li')
        switch (temp){
            case 1:
                role= ' - Top'
                break
            case 2:
                role= ' - Jungle'
                break
            case 3:
                role=  ' - Mid'
                break
            case 4:
                role=  ' - ADC'
                break
            case 5:
                role=  ' - Sup'
        }

        jogador.innerText=element + role
        time2ul.append(jogador)
        temp++
    })
}