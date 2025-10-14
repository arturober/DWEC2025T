const input = document.getElementById("nuevo");
const appendBtn = document.getElementById("append");
const prependBtn = document.getElementById("prepend");
const lista = document.getElementById("lista");
const posBtn = document.getElementById("addPos");
const inputPos = document.getElementById("pos");
const replaceBtn = document.getElementById("replacePos");
const vaciarBtn = document.getElementById("vaciar");

function createLi(text) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Eliminar";
    li.append(text, " ", button);
    button.addEventListener("click", () => {
        li.remove();
    });
    return li;
}

appendBtn.addEventListener("click", () => {
    const li = createLi(input.value);
    lista.append(li);
    input.value = "";
});

prependBtn.addEventListener("click", () => {
    const li = createLi(input.value);
    lista.prepend(li);
    input.value = "";
});

posBtn.addEventListener("click", () => {
    const li = createLi(input.value);
    const pos = +inputPos.value;
    lista.children[pos-1]?.before(li);
    input.value = "";
});

replaceBtn.addEventListener("click", () => {
    const li = createLi(input.value);
    const pos = +inputPos.value;
    lista.children[pos-1]?.replaceWith(li);
    input.value = "";
});

vaciarBtn.addEventListener("click", () => {
    lista.replaceChildren();
});
