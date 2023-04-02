const btn = document.getElementById("btn");
const containerEl = document.getElementById("container");

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    containerEl.insertBefore(noteEl, btn);
});

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
            updateNote(id, element.value);

        })
        // console.log(id, content)
    return element;
}

function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);

    function saveNote() {
        localStorage.setItem("note-app", JSON.stringify(notes));
    }
}

function deleteNote() {

}

function addNote() {
    const notes = getNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    }
    console.log(noteObject)

    const noteEl = createNoteEl(noteObject.id, noteObject.content);
    containerEl.insertBefore(noteEl, btn);

    notes.push(noteObject);
    saveNote(notes);

    function saveNote() {
        localStorage.setItem("note-app", JSON.stringify(notes));
    }

}



function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}

btn.addEventListener("click", addNote);