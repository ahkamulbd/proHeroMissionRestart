// console.log ('Todo API');

document.getElementById ("todo-btn").addEventListener('click', () => {
    // console.log ('Click');

    const loadTodo = () => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    fetch (url)
        .then (res => res.json())
        // .then (data => console.log (data))
        .then (data => displayTodo (data))
    }

    const todoContainer = document.getElementById ("todo-container");
    todoContainer.innerHTML = "";

    const displayTodo = (todos) => {
        // console.log (todos);
        todos.forEach(todo => {
            console.log (todo);
            // console.log ();

            const todoDiv = document.createElement ("div");
            todoDiv.innerHTML = `
                <div class="todo-card">
                    <h4>${todo.id}</h4>
                    <p>${todo.title}</p>
                </div>
            `
            todoContainer.appendChild (todoDiv);
        });

    }

    loadTodo ();    
})

