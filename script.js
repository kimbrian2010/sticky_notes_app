const btn = document.getElementById("btn");
const containerEl = document.getElementById("container");

function createNoteEl(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this Node?");
        if (warning) {
            deleteNote(id, element);
        }

    })

    element.addEventListener("input", () => {

        })
        // console.log(id, content)
    return element;
}

function updateNote() {

}

function deleteNote() {

}

function addNote() {
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    }
    console.log(noteObject)

    const noteEl = createNoteEl(noteObject.id, noteObject.content);
    containerEl.insertBefore(noteEl, btn);
}

btn.addEventListener("click", addNote);