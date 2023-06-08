// Get the necessary elements from the DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new to-do item
function createTodoItem(todoText) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const text = document.createElement('span');
  text.textContent = todoText;

  // Add event listener to checkbox
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  });

  // Append elements to the list item
  li.appendChild(checkbox);
  li.appendChild(text);

  // Append list item to the to-do list
  todoList.appendChild(li);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const todoText = input.value.trim();

  if (todoText !== '') {
    createTodoItem(todoText);
    input.value = '';
    input.focus();
  }
}

// Add event listener to the form
form.addEventListener('submit', handleFormSubmit);
