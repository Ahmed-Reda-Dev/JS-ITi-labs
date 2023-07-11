document.addEventListener('DOMContentLoaded', function () {

    // Get references to the necessary DOM elements
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoTable = document.getElementById('todo-table');
    const todoTableBody = todoTable.getElementsByTagName('tbody')[0];

    // Initialize an empty array to store the todos
    let todos = [];

    // Add a click event listener to the "Add Todo" button
    addTodoBtn.addEventListener('click', function () {

        // Get the trimmed value of the todo input
        const todoText = todoInput.value.trim();

        // If the input is not empty, create a new todo object and add it to the todos array
        if (todoText) {
            const todo = {
                id: Date.now(),
                text: todoText,
                completed: false
            };
            todos.push(todo);

            // Clear the input field and render the updated todos
            todoInput.value = '';
            renderTodos();
        }
    });

    // Render the todos in the table
    function renderTodos() {

        // Clear the table body
        todoTableBody.innerHTML = '';

        // Loop through the todos array and create a new row for each todo
        todos.forEach(function (todo) {
            const row = document.createElement('tr');
            row.dataset.id = todo.id;

            // Create a checkbox for the todo's completed status
            const checkboxCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.style.width = '20px'; // increase checkbox size
            checkbox.style.height = '20px'; // increase checkbox size

            // Add an event listener to the checkbox to update the todo's completed status and re-render the todos
            checkbox.addEventListener('change', function () {
                todo.completed = this.checked;
                if (todo.completed) {
                    textCell.classList.add('completed');
                } else {
                    textCell.classList.remove('completed');
                }
                renderTodos();
            });
            checkboxCell.appendChild(checkbox);
            row.appendChild(checkboxCell);

            // Create a cell for the todo's text
            const textCell = document.createElement('td');
            textCell.textContent = todo.text;
            if (todo.completed) {
                textCell.classList.add('completed');
            }
            row.appendChild(textCell);

            // Create a cell for the delete button
            const deleteCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.disabled = !todo.completed;

            // Add an event listener to the delete button to remove the todo from the todos array and re-render the todos
            deleteBtn.addEventListener('click', function () {
                todos = todos.filter(function (t) {
                    return t.id !== todo.id;
                });
                renderTodos();
            });
            deleteCell.appendChild(deleteBtn);
            row.appendChild(deleteCell);

            // Add the row to the table body
            todoTableBody.appendChild(row);
        });

    }
    renderTodos();

});
