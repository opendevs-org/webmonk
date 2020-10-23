loadEvents();
// // load every event in the page
function loadEvents() {
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);
}
// // subit data function
function submit() {
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// // add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">X</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

// // clear the LIST
function clearList(e){
  document.querySelector('ul').innerHTML = '';
}

// // deleteTick
function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// // delete task
function deleteTask(e){
  console.log(e)
  let listItem = e.target.parentNode;
  let ulParent = listItem.parentNode;
  ulParent.removeChild(listItem);
}

// // tick a task
function tickTask(e){
  const task = e.target.nextSibling; // nextChild of Input i.e. label
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}
