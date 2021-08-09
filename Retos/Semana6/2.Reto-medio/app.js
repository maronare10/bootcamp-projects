
let tasks = [];
const button = document.getElementById("todoButton");

const input = document.getElementById("todoInputTask");



function renderTask (text) {
  let checkboxes = null;
  const ul = document.getElementById("listTask");
  ul.innerHTML += `<li class="itemTask"> <input type="checkbox" class="checkTask"> ${text} </li>`;
  checkboxes = document.querySelectorAll('.checkTask');
  checkboxes.forEach(function(checkbox){
    checkbox.addEventListener("click", function(event){
      event.target.parentElement.classList.toggle("completed");
    })
  })
}




button.addEventListener("click", function(event){
  if(input.value === ""){
    alert ("El campo está vacío")
    return;
  }
  tasks.push(input.value);
  renderTask(input.value);
  input.value = "";


  

}); 




