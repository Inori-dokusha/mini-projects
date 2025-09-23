const todo = [
    {
        text: "Learn HTML",
        done: false,
    },
    {
        text: "Learn CSS",
        done: false,
    },
    {
        text: "Learn JS",
        done: false,
    },
];

//Get all elements
const input = document.querySelector("#todoText");
const button = document.querySelector("#addTodo");
const ul = document.querySelector("#todoList");
const filtersButton = document.querySelectorAll(".filters button");

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
        console.log(todo);
        renderTodo();
    }
}

function renderTodo() {
    let html = "";

    todo.forEach((item) => {
        const li = `
           <li class="item">
                <input type="checkbox" id="checkbox" />
                <p class="text">${item.text}</p>
                <button id="removeTodo">
                    <img src="icon/trash.svg" width="24" />
                </button>
            </li>
    `;
        html += li;
    });
    ul.innerHTML = html;
}

// button remove todo
const btnRemove = document.querySelectorAll("#removeTodo");
btnRemove.forEach((item, index) => {
    item.addEventListener("click", () => {
        todo.splice(index, 1);
        console.log(todo);
        renderTodo();
    });
});

const filters = document.querySelector(".filters");
filters.addEventListener("click", (element) => {
    if (element.target.matches(".all")) {
        console.log(todo);
    } else if (element.target.matches(".active")) {
        buttonActive();
    } else if (element.target.matches(".completed")) {
        buttonCompleted();
    }
});
