
    function addTodo() {
        var todoInput = document.getElementById('addTodoInput');
        var todoList = document.getElementById('todo-list');

        if (todoInput.value.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        var li = document.createElement('li');
        li.className = 'todo-item';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        });

        var textNode = document.createTextNode(todoInput.value);

        var deleteIcon = document.createElement('span');
        deleteIcon.className = 'delete-icon';
        deleteIcon.innerHTML = '&#10006;';
        deleteIcon.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(deleteIcon);

        todoList.appendChild(li);

        todoInput.value = '';
    }

