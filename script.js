const alert = document.querySelector(".alert");
const shoppingListElement = document.getElementById("shopping-list");
const emptyMessageElement = document.getElementById("empty-message");
const inputNovoItem = document.getElementById("inputNovoItem");
const botaoAdicionarElement = document.getElementById("botaoAdicionar").addEventListener("click", adicionarNovoItem);


function updateEmptyMessageVisibility() {
    const realListItems = shoppingListElement.querySelectorAll(".list-item")
    if (realListItems.length === 0) {
        
        emptyMessageElement.classList.remove("hidden");
    } else {
        
        emptyMessageElement.classList.add("hidden");
    }
}

function adicionarNovoItem() {

    const valorDigitado = inputNovoItem.value;

    if (valorDigitado === "") return;

    const novoItem = document.createElement("li");
    novoItem.classList.add("list-item");

    const idItem = valorDigitado.toLowerCase().replace(/\s+/g, "-");

    novoItem.innerHTML = `
        <div>
            <input type="checkbox" name="${idItem}" id="${idItem}">
            <label for="${idItem}">${valorDigitado}</label>
        </div>
        <div>
            <img class="delete-icon" src="./assets/delete.svg" alt="Excluir">
        </div>
    `
    document.getElementById("shopping-list").appendChild(novoItem)
    inputNovoItem.value = "";

    const icon = novoItem.querySelector(".delete-icon");

    icon.addEventListener("click", function () {
        icon.closest("li").remove()
        showAlert();
         updateEmptyMessageVisibility();
    })
    inputNovoItem.value = "";
    updateEmptyMessageVisibility();
}

function showAlert() {
    alert.classList.remove("hidden")
    setTimeout(() => {
        alert.classList.add("hidden");
    }, 2000);
}

document.addEventListener("DOMContentLoaded", updateEmptyMessageVisibility);