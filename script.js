function adicionarTarefa(){

let input = document.getElementById("inputTarefa")

let tarefa = input.value

if(tarefa === "") return

let li = document.createElement("li")

li.innerText = tarefa

li.onclick = function(){

li.style.textDecoration = "line-through"

}

document.getElementById("lista").appendChild(li)

input.value = ""

}