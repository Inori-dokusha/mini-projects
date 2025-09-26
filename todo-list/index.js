import todo from "./todo.js";

//Get all elements
const input = document.querySelector("#todoText");
const button = document.querySelector("#addTodo");
const ul = document.querySelector("#todoList");

//Button to add new todo
button.addEventListener("click", addTodo);

renderTodo();

function addTodo() {
    const inputValue = input.value;

    //check value of input
    if (!inputValue) {
        input.classList.add("danger");
        setTimeout(() => {
            input.classList.remove("danger");
        }, 1000);
    } else {
        input.value = "";
        todo.push({ text: inputValue, done: false });
        renderTodo();
    }
}

function renderTodo(list = todo) {
    let html = "";

    list.forEach((item) => {
        const li = `
           <li class="item">
                <input type="checkbox" id="checkbox" ${
                    item.done ? "checked" : ""
                }/>
                <p class="text">${item.text}</p>
                <button id="removeTodo">
                    <img src="icon/trash.svg" width="24" />
                </button>
            </li>
    `;
        html += li;
    });
    ul.innerHTML = html;

    // button remove todo
    const btnRemove = document.querySelectorAll("#removeTodo");
    btnRemove.forEach((item, index) => {
        item.addEventListener("click", () => {
            todo.splice(index, 1);
            renderTodo();
        });
    });

    // Checkbox
    const checkbox = document.querySelectorAll("#checkbox");
    checkbox.forEach((e, i) => {
        e.addEventListener("change", () => {
            todo[i].done = !todo[i].done;
        });
    });
}

const filters = document.querySelector(".filters");
filters.addEventListener("click", (element) => {
    document.querySelectorAll(".filters button").forEach((button) => {
        button.id = "";
    });
    if (element.target.matches(".all")) {
        document.querySelector(".all").id = "on";
        renderTodo();
    } else if (element.target.matches(".active")) {
        document.querySelector(".active").id = "on";
        buttonActive();
    } else if (element.target.matches(".completed")) {
        document.querySelector(".completed").id = "on";
        buttonCompleted();
    }
});

function buttonActive() {
    const active = todo.filter((item) => !item.done);
    renderTodo(active);
}

function buttonCompleted() {
    const completed = todo.filter((item) => item.done);
    renderTodo(completed);
}
