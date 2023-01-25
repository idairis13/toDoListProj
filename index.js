
//Array.from() will turn an HTMLCollection into an array that can be used in a for loop
//querySelector(All) gives you NodeList
const list = document.querySelector('#todo-list ol');
//getElement gives you an HTMLCollection
var clearListBtn = document.getElementsByTagName('li');


// delete event ('done')
list.addEventListener('click', (e) => {
  if(e.target.className == 'done'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});



//add event
const addForm = document.forms['add-form'];

addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  //this variable grabs the input by the user into the blue box
  const value = addForm.querySelector('input[type="text"]').value;

  //edge case
  if (value === "") {
    return 'x'
  };

  //create element to put in list
  const li = document.createElement('li');
  const toDoElement = document.createElement('span');
  const doneButton = document.createElement('span');
  //const deleteButton = document.createElement('span');

  //add content
  toDoElement.textContent = value;
  // deleteButton.textContent = 'X';
  doneButton.textContent = 'Done';

  //add classes
  toDoElement.classList.add('event');
  //deleteButton.classList.add('delete');
  doneButton.classList.add('done');

  //append to document
  li.appendChild(toDoElement);
  //li.appendChild(deleteButton);
  li.appendChild(doneButton);

  list.appendChild(li);

});



















