let addDOM = document.querySelector("#liveToastBtn")
let ulDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ulLength = document.getElementsByTagName("li")

for(let i = 0; i<ulLength;i++){
    let closeButton = document.createElement("span")
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close")
    closeButton.onclick = removeButton
    ulLength[i].append(closeButton)
    ulLength[i].onclick = check
}

addDOM.addEventListener("click",newElement)

function check(){
    this.classList.add("checked")
}

function removeButton(){
    this.classList.remove()
}

function newElement(){
    if(taskDOM.value == ""){
        $(".error").toast("show")
    }
    else{
        $(".success").toast("show")

        let liDOM = document.createElement("li")
        ulDOM.appendChild(liDOM);
        liDOM.innerHTML = taskDOM.value
        taskDOM.value = ""

        liDOM.onclick = check;
        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeButton
        liDOM.append(closeButton)
        ulDOM.append(liDOM)
        taskDOM.value = ("");
    }
}































/*
let userFormDOM = document.querySelector("#userForm")
let liveToastBtn = document.querySelector("#liveToastBtn")
const showHide = () =>{
    const toast = document.querySelector(".toast-body")
    toast.classList.add("show")
    setTimeout(() =>{
        toast.classList.remove("show");
        toast.classList.add("hide")
    },5000)
}

function newElement(){
    userFormDOM.addEventListener("submit",formHandler)
}
function formHandler(event){
    event.preventDefault()
    let task = document.querySelector("#task")
    if(task.value && task.value.trim()){
        addItem(task.value)
        task.value = "";
    }
    else{
        showHide()
    }
}

<ul class="list-group mt-5" id="toDolist">
</ul>

let ulDOM = document.querySelector("#toDolist")
const addItem  = (task) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${task}`
    ulDOM.appendChild(liDOM)
    setlocalStroge(task)

}

ulDOM.addEventListener("click",completeListItem)

function completeListItem(e){
    e.preventDefault()
    e.target.classList.add("checked")
    ulDOM.addEventListener("click",function(e){
        e.preventDefault()
        e.target.classList.remove("checked")
    })
}

*/