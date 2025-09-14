const todo = [];

const input = document.querySelector("#todoText");
const button = document.querySelector("#addTodo");
const ul = document.querySelector("#todoList");
const popup = document.querySelector(".popup");

button.addEventListener("click", addTodo);

function addTodo() {
    const inputValue = input.value;
    todo.push(inputValue);
    if (!inputValue) {
        popup.classList.add("on");
        setTimeout(() => {
            popup.classList.remove("on");
        }, 2000);
    } else {

        ul.innerHTML = renderTodo();
        const removeBtn = document.querySelectorAll("#remove");
        removeBtn.forEach((item, index) => {
            item.addEventListener(() => {
                todo.splice(index, 1);

                console.log(todo);
                renderTodo();
            });
        });
    }
}

function renderTodo() {
    let html = "";
    todo.forEach(item => {
        const li = `
            <li class="list">
                <p class="list-name">${item}</p>
                <button class="remove">&#45;</button>
            </li>
        `;
        html += li;
    });
    return html;
}
