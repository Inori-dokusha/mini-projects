const todo = [];

//Get all elements
const input = document.querySelector("#todoText");
const button = document.querySelector("#addTodo");
const ul = document.querySelector("#todoList");
const filtersButton = document.querySelectorAll(".filters button");

//Button to add new todo
button.addEventListener("click", addTodo);

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
        todo.push(inputValue);
        renderTodo();
    }
}

function renderTodo() {
    let html = "";

    todo.forEach(item => {
        const li = `
           <li class="item">
                <input type="checkbox" id="checkbox" />
                <p class="text">${item}</p>
                <button id="removeTodo">
                    <img src="icon/trash.svg" width="24" />
                </button>
            </li>
    `;
        html += li;
    });
    ul.innerHTML = html;

    const btnRemove = document.querySelectorAll("#removeTodo");
    btnRemove.forEach((item, index) => {
        item.addEventListener("click", () => {
            todo.splice(index, 1);
            renderTodo();
        });
    });
    const checkbox = document
        .querySelectorAll("input[type='checkbox']")
        .forEach((box, index) => {
            const p = document.querySelectorAll(".text");
            box.addEventListener("change", () => {
                if(box.checked === true) {
                const checklist = p[index].setAttribute(
                    "data-checklist",
                    "true"
                );
                console.log(box.checked);
                }
            });
        });
}
