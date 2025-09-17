const todo = [];

const input = document.querySelector("#todoText");
const button = document.querySelector("#addTodo");
const ul = document.querySelector("#todoList");
const popup = document.querySelector(".popup");

button.addEventListener("click", addTodo);

function addTodo() {
    const inputValue = input.value;
    
    if (!inputValue) {
        popup.classList.add("on");
        setTimeout(() => {
            popup.classList.remove("on");
        }, 2000);
    } else {
        input.value = "";
        todo.push(inputValue);
        renderTodo();
    }
}

function renderTodo() {
    let html = "";
    
    todo.forEach((item) => {
        const li = `
            <li class="list"
                <div class="checkbox">
                    <input type="checkbox" />
                </div>
                <div class="list-name">
                    <p>${item}</p>
                </div>
                <button class="remove">
                    <img src="icon/trash.svg"/>
                </button>
            </li>
    `;
        html += li;
    });
    ul.innerHTML = html;
    const btnRemove = document.querySelectorAll(".remove");
    btnRemove.forEach((item, index) => {
        item.addEventListener("click", () => {
            todo.splice(index, 1);
            renderTodo();
        });
    });
}