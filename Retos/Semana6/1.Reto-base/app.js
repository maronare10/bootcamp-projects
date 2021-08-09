
let tasks = [];
const button = document.getElementById("todoButton");

const input = document.getElementById("todoInputTask");



button.addEventListener("click", function(event){
  if(input.value === ""){
    alert ("El campo está vacío")
    return;
  }
  tasks.push(input.value);
  input.value = "";

  console.log(tasks);
});



