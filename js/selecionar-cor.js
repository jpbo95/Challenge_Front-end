//Mudança de cores do editor

const selectColor = document.querySelector("#cores");
const editorColor = document.querySelector("#campo-cor-editor");

selectColor.addEventListener("input", (event) => {
    let cor = event.target.value;
    editorColor.style = `background: ${cor}`;
});